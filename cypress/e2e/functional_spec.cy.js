describe('Functional Tests', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1e6f0fc53c7a4b9f9999efabbd374789', {
      statusCode: 200,
      fixture: '/mock-data-articles.json'
    }).as('getArticles');
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=1e6f0fc53c7a4b9f9999efabbd374789', {
      statusCode: 200,
      fixture: '/mock-data-sources.json'
    }).as('getSources');
    cy.visit('/');
    cy.wait('@getArticles');
    cy.wait('@getSources');
  });

  it('should render article previews on load of the main page', () => {
    cy.get('.article-link').children().should('have.length', 9);

    cy.get('.ArticlePreview').first().within(() => {
      cy.get('.preview-image')
        .should('have.attr', 'src', 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FHECWDYZWLSR4JVXNQYQQFKQE4.JPG&w=1440')
        .should('have.attr', 'alt', 'DeSantis is far from the first to quote something Churchill never said');
      cy.get('.preview-title').contains('DeSantis is far from the first to quote something Churchill never said');
      cy.get('.preview-date').contains('2024-01-22T18:39:09Z');
      cy.get('.preview-source').contains('The Washington Post');
      cy.get('.preview-description').contains("Florida's governor, ending his presidential campaign, attributed to the British statesman a quote about 'the courage to continue' that experts say is inaccurate.");
    });

    cy.get('.ArticlePreview').last().within(() => {
      cy.get('.preview-image')
        .should('have.attr', 'src', 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1329590941.jpg?c=16x9&q=w_800,c_fill')
        .should('have.attr', 'alt', 'H&M pulls school uniform ad in Australia after complaints it sexualized children');
      cy.get('.preview-title').contains('H&M pulls school uniform ad in Australia after complaints it sexualized children');
      cy.get('.preview-date').contains('2024-01-22T17:14:20Z');
      cy.get('.preview-source').contains('CNN');
      cy.get('.preview-description').contains("H&M has apologized for and removed a school uniform advertisement in Australia after users on social media complained that it sexualized children.");
    });
  });

  it('should render appropriate article previews when a source is selected on the filter', () => {
    cy.get('label').contains('Filter By Source');
    cy.get('#select-source').within(() => {
      cy.contains('All Sources');
      cy.contains('ABC News');
      cy.contains('Associated Press');
      cy.contains('CBS News');
      cy.contains('CNN');
      cy.contains('NBC News');
      cy.contains('Politico');
      cy.contains('Reuters');
      cy.contains('The Washington Post');
    });

    cy.get('#select-source')
      .select('Reuters')
      .invoke('val')
      .should('eq', 'Reuters');

    cy.get('.article-link').children().should('have.length', 1);

    cy.get('.ArticlePreview').within(() => {
      cy.get('.preview-image')
        .should('have.attr', 'src', 'https://www.reuters.com/resizer/j-sajSVXWh_dR2pwKx_24VwAyyI=/1920x1005/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NMCJSHDWWFKGRBQOGTVQNQTXDI.jpg')
        .should('have.attr', 'alt', 'Sunoco to buy NuStar Energy in $7.3 billion all-stock deal');
      cy.get('.preview-title').contains('Sunoco to buy NuStar Energy in $7.3 billion all-stock deal');
      cy.get('.preview-date').contains('2024-01-22T13:09:10Z');
      cy.get('.preview-source').contains('Reuters');
      cy.get('.preview-description').contains("Motor fuels distributor Sunoco <a href=\"https://www.reuters.com/markets/companies/SUN.N\" target=\"_blank\">(SUN.N)</a> said on Monday it would acquire oil and gas transportation service NuStar Energy <a href=\"https://www.reuters.com/markets/companies/NS.N\" targ…");
    });

    cy.get('#select-source')
      .select('All Sources')
      .invoke('val')
      .should('eq', '');

    cy.get('.article-link').children().should('have.length', 9);

    cy.get('.ArticlePreview').first().within(() => {
      cy.get('.preview-image')
        .should('have.attr', 'src', 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FHECWDYZWLSR4JVXNQYQQFKQE4.JPG&w=1440')
        .should('have.attr', 'alt', 'DeSantis is far from the first to quote something Churchill never said');
      cy.get('.preview-title').contains('DeSantis is far from the first to quote something Churchill never said');
      cy.get('.preview-date').contains('2024-01-22T18:39:09Z');
      cy.get('.preview-source').contains('The Washington Post');
      cy.get('.preview-description').contains("Florida's governor, ending his presidential campaign, attributed to the British statesman a quote about 'the courage to continue' that experts say is inaccurate.");
    });

    cy.get('.ArticlePreview').last().within(() => {
      cy.get('.preview-image')
        .should('have.attr', 'src', 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1329590941.jpg?c=16x9&q=w_800,c_fill')
        .should('have.attr', 'alt', 'H&M pulls school uniform ad in Australia after complaints it sexualized children');
      cy.get('.preview-title').contains('H&M pulls school uniform ad in Australia after complaints it sexualized children');
      cy.get('.preview-date').contains('2024-01-22T17:14:20Z');
      cy.get('.preview-source').contains('CNN');
      cy.get('.preview-description').contains("H&M has apologized for and removed a school uniform advertisement in Australia after users on social media complained that it sexualized children.");
    });
  });

  it('should render article detail on a new page when an article preview is clicked', () => {
    cy.get('.article-link').first().click();

    cy.url().should('eq', 'http://localhost:3000/article/0');

    cy.get('.ArticleDetail').within(() => {
      cy.get('.detail-image')
        .should('have.attr', 'src', 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FHECWDYZWLSR4JVXNQYQQFKQE4.JPG&w=1440')
        .should('have.attr', 'alt', 'DeSantis is far from the first to quote something Churchill never said');
      cy.get('.detail-title').contains('DeSantis is far from the first to quote something Churchill never said');
      cy.get('.detail-date').contains('2024-01-22T18:39:09Z');
      cy.get('.detail-source').contains('The Washington Post');
      cy.get('.link-out').should('have.attr', 'href', 'https://www.washingtonpost.com/history/2024/01/22/ron-desantis-winston-churchill/');
      cy.get('.detail-content').contains("Ron DeSantis ended his presidential campaign Sunday but promised to keep fighting woke ideology as Floridas governor. To illustrate th… [+3234 chars]");
    });
  });

  it('should return the user to the home page when the title in the header is clicked', () => {
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.article-link').first().click();

    cy.url().should('eq', 'http://localhost:3000/article/0');
    cy.get('.Header').within(() => {
      cy.get('.app-title-link').should('have.attr', 'href', '/');
      cy.get('.app-title').contains('The Haps');
    });

    cy.get('.app-title-link').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});