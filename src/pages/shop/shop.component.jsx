import React from 'react'
import {connect} from 'react-redux'

import {createStructuredSelector } from 'reselect'

import '../../components/collection-preview/collection-preview.component'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'


import {selectCollections} from '../../redux/shop/shop.selectors'


const  ShopPage = ({ collections}) => ( 
         <div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionsProps}) => (
                    <CollectionPreview key={id} {...otherCollectionsProps} />

                ))
            }

        </div>
)

const mapStateProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateProps)(ShopPage);
