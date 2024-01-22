const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginWebc);

    eleventyConfig.addPassthroughCopy("dev/assets");

    return {
        dir: {
            input: "dev",
            output: "public",
            layouts: "_includes/layouts"
        },
        templateFormats: ["webc", "md", "css" ]
    };
};