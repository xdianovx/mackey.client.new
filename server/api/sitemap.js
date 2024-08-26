export default defineSitemapEventHandler(async (e) => {
  // sources: ["https://api.makey.by/api/v1/products/data"],
  const posts = await $fetch("https://api.makey.by/api/v1/products/");

  return posts.data.map((p) => {
    return {
      loc: p.slug,
      lastmod: new Date(),
      images: [
        p.product_files.map((f) => ({
          loc: f.file,
          title: p.title,
        })),
      ],
    };
  });
});
