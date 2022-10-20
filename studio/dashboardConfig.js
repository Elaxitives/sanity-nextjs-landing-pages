export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6351b1121ad8c311e9eaa29a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fdbwpnxw',
                  apiId: '0e4d6299-ef91-4492-87d5-f272f3e3b97e'
                },
                {
                  buildHookId: '6351b1126eb17e15ef23594b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4qv1rmgj',
                  apiId: '2027e816-5f75-425a-8a71-70de5950253e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Elaxitives/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4qv1rmgj.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
