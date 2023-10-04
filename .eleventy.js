const obfuscate = require("@achilleus/obfuscate");
module.exports = function (eleventyConfig) {
    eleventyConfig.setQuietMode(true);
    eleventyConfig.addPlugin(obfuscate);
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/img/");
    eleventyConfig.addPassthroughCopy("./src/img/hq");
    eleventyConfig.addPassthroughCopy("./src/js/");
    eleventyConfig.addPassthroughCopy("./src/robots.txt");

    eleventyConfig.addGlobalData("DEBUG", false);

    // Default site theme's
    eleventyConfig.addGlobalData("default_logo_img", "formation-sup-logo-small.svg");
    eleventyConfig.addGlobalData("default_logo_width", "30"); // In %
    eleventyConfig.addGlobalData("default_baseline", "Formation Sup'");

    // TRACKING
    // Balise GA4 + Google Ads
    eleventyConfig.addGlobalData("ga4_tag", "G-VZ2H334F54"); // Utilisé pour GA4 et comme balise principale
    eleventyConfig.addGlobalData("gads_tracking_id", "11323499333"); // Utilisé pour la balise de conversion (identique pour toutes les convs)
    // RAPPEL POUR FORMULAIRES : dans la TYP, ces paramètres GET doivent être présents : phone, mail, rid, score
    eleventyConfig.addGlobalData("gads_valid_leads_tracking_label", "223lCMy44NwYEMXGu5cq"); // For GOOD leads
    eleventyConfig.addGlobalData("gads_not_valid_leads_tracking_label", "J1QPCJaS49wYEMXGu5cq"); // For BAD leads
    eleventyConfig.addGlobalData("gads_leads_tracking_base_value", "50"); // must be decimal
    eleventyConfig.addGlobalData("allow_only_score_gt", 0); // Track leads submissions with GET "score" > to X
    eleventyConfig.addGlobalData("gads_tracking_currency", "EUR");
    // Google Optimize
    eleventyConfig.addGlobalData("google_optimize_id", "OPT-59JN2T2");
    // Clarity
    eleventyConfig.addGlobalData("clarity_id", "iv591ryqf7");

    eleventyConfig.addGlobalData("societe_nom", "Celt Consulting SAS");
    eleventyConfig.addGlobalData("societe_mail", "bonjour@emile-et-arthur.com");
    eleventyConfig.addGlobalData("societe_responsable", "Émile Cottard");
    eleventyConfig.addGlobalData("societe_adresse", "23 RUE DES ECOUFFES 75004 PARIS, FRANCE");
    eleventyConfig.addGlobalData("societe_siret", "82362788000029");

    // Status agents
    eleventyConfig.addGlobalData("agent_status_fin_jour_ouvre", 19);
    eleventyConfig.addGlobalData("agent_status_debut_jour_ouvre", 8);
    eleventyConfig.addGlobalData("hide_agent_if_absent", false);

    return {
        htmlTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "_site",
        },
    };
};