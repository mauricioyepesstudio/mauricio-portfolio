const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const cache = new Map();
function load(file) {
  file = path.resolve(file);
  if (cache.has(file)) return cache.get(file);
  const module = { exports: {} };
  cache.set(file, module.exports);
  const source = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const localRequire = (id) => {
    if (id === 'server-only') return {};
    if (!id.startsWith('.')) throw new Error('Unexpected data dependency: ' + id);
    return load(path.resolve(path.dirname(file), id + '.ts'));
  };
  vm.runInNewContext(source, { module, exports: module.exports, require: localRequire }, { filename: file });
  cache.set(file, module.exports);
  return module.exports;
}
const catalog = load(path.join(root, "lib/projects/catalog.ts")).brandCatalog;
const slugs = catalog.map((v) => v.slug);
if (new Set(slugs).size !== slugs.length) throw new Error("Duplicate project slug");
console.log(slugs.length + " unique project entries");
const refs = new Set();
function scan(value) {
  if (typeof value === 'string' && /^\/(projects|brand)\//.test(value)) refs.add(value);
  if (Array.isArray(value)) value.forEach(scan);
  else if (value && typeof value === 'object') Object.values(value).forEach(scan);
}
for (const slug of ['microbeau', 'evenflo', 'getlost', 'resource-living', 'belong', 'personal-cfo', 'stamina', 'stilo-group']) {
  const values = Object.values(load(path.join(root, 'lib/case-studies', slug + '.ts')));
  const data = values.find((v) => v && v.heroImage);
  if (!data) throw new Error('Missing case: ' + slug);
  scan(data);
  const chapters = data.campaigns || data.chapters || [];
  const names = chapters.map((v) => v.slug);
  if (new Set(names).size !== names.length) throw new Error('Duplicate campaign: ' + slug);
  for (const chapter of chapters) {
    const media = [chapter.hero, chapter.packaging, chapter.newsletter, ...(chapter.posts || []), ...(chapter.stories || []), ...(chapter.banners || []), ...(chapter.social || []), ...(chapter.videos || []), ...(chapter.gallery || []).flatMap((v) => v.assets)].filter(Boolean);
    const seen = new Set();
    for (const asset of media) {
      if (seen.has(asset.src)) throw new Error('Repeated media in ' + slug + '/' + chapter.slug + ': ' + asset.src);
      seen.add(asset.src);
    }
  }
  console.log(slug + ': ' + chapters.length + ' unique campaigns');
}
for (const src of refs) {
  if (!fs.existsSync(path.join(root, 'public', decodeURIComponent(src)))) throw new Error('Missing asset: ' + src);
}
console.log(refs.size + ' referenced assets exist.');
if (process.env.WRITE_CURATED_REFS) fs.writeFileSync(process.env.WRITE_CURATED_REFS, JSON.stringify([...refs], null, 2));
