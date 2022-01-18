export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61e6eda298345c386783baae',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-i986psqw',
                  apiId: '3ce22773-5eee-477f-bdb3-41f05360a5aa'
                },
                {
                  buildHookId: '61e6eda220b5dc5a80908810',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-cp785tpy',
                  apiId: '61fa281d-c5c9-4325-adbd-f707881c3efb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shs-shadi/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-cp785tpy.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
