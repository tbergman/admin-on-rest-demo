import React from 'react';
import { ReferenceField, TextField } from 'admin-on-rest/lib/mui';

const ProductReferenceField = (props) => (
    <ReferenceField label="Product" source="product_id" reference="products" {...props}>
        <TextField source="reference" />
    </ReferenceField>
)
ProductReferenceField.defaultProps = {
    label: 'Product',
    source: 'product_id',
    addLabel: true, 
};

export default ProductReferenceField;
