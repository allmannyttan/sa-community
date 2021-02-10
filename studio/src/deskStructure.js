import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdFolderOpen } from 'react-icons/md'
import { RiPagesLine } from 'react-icons/ri'
import { FaUserAstronaut, FaRegEye } from 'react-icons/fa'

import IframePreview from './IframePreview'

// Web preview configuration
const remoteURL = 'https://sadev-test-web.vercel.app/'
const localURL = 'http://localhost:8000'
const previewURL =
  window.location.hostname === 'localhost' ? localURL : remoteURL

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const previewSchemaTypes = ['project', 'newsPost']
  const { schemaType } = props

  if (previewSchemaTypes.includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL }),
    ])
  }
  return S.document().views([S.view.form()])
}

const getSingletonPageStructure = (title, type) =>
  S.listItem()
    .title(title)
    .icon(RiPagesLine)
    .child(
      S.editor()
        .id(type)
        .schemaType(type)
        .documentId(type)
        .title(title)
        .views([
          S.view.form(),
          S.view
            .component(IframePreview)
            .title('Web preview')
            .options({ previewURL }),
        ])
    )

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
        .title('Nyheter')
        .icon(MdFolderOpen)
        .schemaType('newsPost')
        .child(S.documentTypeList('newsPost').title('Nyheter')),
      S.divider(),
      S.listItem()
        .title('Sidor')
        .icon(FaRegEye)
        .child(
          S.list()
            .title('Sidor')
            .items([
              getSingletonPageStructure('Hem', 'homePage'),
              getSingletonPageStructure('Om oss', 'aboutUsPage'),
              getSingletonPageStructure('Kommunikation', 'communicationPage'),
            ])
        ),

      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.j  s. We filter out those that we have
      // defined the structure above.
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'category',
            'author',
            'post',
            'siteSettings',
            'work',
            'project',
            'homePage',
            'focusArea',
            'heroBlock',
            'aboutUsPage',
            'newsPost',
            'editor',
            'communicationPage',
          ].includes(listItem.getId())
      ),
    ])
