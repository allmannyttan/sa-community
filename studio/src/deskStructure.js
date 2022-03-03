import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdFolderOpen } from 'react-icons/md'
import { FaUserAstronaut, FaRegEye } from 'react-icons/fa'

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title('Innehåll')
    .items([
      S.listItem()
        .title('Inställningar')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Inställningar')
        ),
      S.divider(),
      S.listItem()
        .title('Redaktörer')
        .icon(FaUserAstronaut)
        .schemaType('editor')
        .child(S.documentTypeList('editor').title('Redaktörer')),
      S.divider(),
      S.listItem()
        .title('Projekt')
        .icon(MdFolderOpen)
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projekt')),
      S.divider(),
      S.listItem()
        .title('API')
        .icon(MdFolderOpen)
        .schemaType('api')
        .child(S.documentTypeList('api').title('Api')),
      S.divider(),
      S.listItem()
        .title('Nyheter')
        .icon(MdFolderOpen)
        .schemaType('newsPost')
        .child(S.documentTypeList('newsPost').title('Nyheter')),
      S.divider(),
      S.listItem()
        .title('Sidor')
        .icon(FaRegEye)
        .child(
          S.documentList()
            .defaultOrdering([{ field: 'priority', direction: 'asc' }])
            .title('Sidor')
            .filter('_type in $types')

            .params({
              types: [
                'homePage',
                'apiPage',
                'projectPage',
                'sourceCodePage',
                'communicationPage',
                'aboutUsPage',
                'newsPage',
                'manifestPage',
              ],
            })
            .child((type) =>
              S.editor()
                .id(type)
                .schemaType(type)
                .documentId(type)

                .views([S.view.form()])
            )
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'category',
            'author',
            'post',
            'siteSettings',
            'work',
            'project',
            'api',
            'homePage',
            'focusArea',
            'getStarted',
            'heroBlock',
            'aboutUsPage',
            'newsPost',
            'editor',
            'communicationPage',
            'apiPage',
            'sourceCodePage',
            'newsPage',
            'projectPage',
            'manifestPage',
          ].includes(listItem.getId())
      ),
    ])
