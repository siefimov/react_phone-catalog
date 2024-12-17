import classNames from 'classnames';
import React from 'react';
import { ProductDetails } from '../../../../types';

type Props = {
  productDetails: ProductDetails;
};

const specs = [
  { title: 'Screen', key: 'screen' },
  { title: 'Resolution', key: 'resolution' },
  { title: 'Processor', key: 'processor' },
  { title: 'RAM', key: 'ram' },
  { title: 'Camera', key: 'camera' },
  { title: 'Zoom', key: 'zoom' },
  { title: 'Cell', key: 'cell' },
];

export const ProductSpecsFull: React.FC<Props> = ({ productDetails }) => (
  <div className="product-details__tech-specs">
    <h3 className="product-details__tech-specs-title typography__h3">
      Tech specs
    </h3>
    <ul className="product-details__tech-specs-list">
      {specs.map(spec => {
        const value = productDetails[spec.key as keyof ProductDetails];

        if (!value) {
          return null;
        }

        return (
          <li key={spec.key} className="product-details__tech-specs-item">
            <span
              className={classNames(
                'product-details__tech-specs-property',
                'typography__small-text',
              )}
            >
              {spec.title}
            </span>
            <span className="product-details__tech-specs-value">
              {Array.isArray(value) ? value.join(', ') : value}
            </span>
          </li>
        );
      })}
    </ul>
  </div>
);

// export const ProductSpecsFull: React.FC<Props> = ({ productDetails }) => (
//   <div className="product-details__tech-specs">
//     <h3 className="product-details__tech-specs-title typography__h3">
//       Tech specs
//     </h3>
//     <ul className="product-details__tech-specs-list">
//       {productDetails.screen && (
//         <li className="product-details__tech-specs-item">
//           <span className={classNames('product-details__tech-specs-property')}>
//             Screen
//           </span>
//           <span className="product-details__tech-specs-value">
//             {productDetails.screen}
//           </span>
//         </li>
//       )}
//       {productDetails.resolution && (
//         <li className="product-details__tech-specs-item">
//           <span
//             className={classNames(
//               'product-details__tech-specs-property',
//               'typography__small-text',
//             )}
//           >
//             Resolution
//           </span>
//           <span className="product-details__tech-specs-value">
//             {productDetails.resolution}
//           </span>
//         </li>
//       )}
//       {productDetails.processor && (
//         <li className="product-details__tech-specs-item">
//           <span
//             className={classNames(
//               'product-details__tech-specs-property',
//               'typography__small-text',
//             )}
//           >
//             Processor
//           </span>
//           <span className="product-details__tech-specs-value">
//             {productDetails.processor}
//           </span>
//         </li>
//       )}
//       {productDetails.ram && (
//         <li className="product-details__tech-specs-item">
//           <span
//             className={classNames(
//               'product-details__tech-specs-property',
//               'typography__small-text',
//             )}
//           >
//             RAM
//           </span>
//           <span className="product-details__tech-specs-value">
//             {productDetails.ram}
//           </span>
//         </li>
//       )}
//       {productDetails.camera && (
//         <li className="product-details__tech-specs-item">
//           <span
//             className={classNames(
//               'product-details__tech-specs-property',
//               'typography__small-text',
//             )}
//           >
//             Camera
//           </span>
//           <span className="product-details__tech-specs-value">
//             {productDetails.camera}
//           </span>
//         </li>
//       )}
//       {productDetails.zoom && (
//         <li className="product-details__tech-specs-item">
//           <span
//             className={classNames(
//               'product-details__tech-specs-property',
//               'typography__small-text',
//             )}
//           >
//             Zoom
//           </span>
//           <span className="product-details__tech-specs-value">
//             {productDetails.zoom}
//           </span>
//         </li>
//       )}
//       {productDetails.cell && (
//         <li className="product-details__tech-specs-item">
//           <span
//             className={classNames(
//               'product-details__tech-specs-property',
//               'typography__small-text',
//             )}
//           >
//             Cell
//           </span>
//           <span className="product-details__tech-specs-value cell">
//             {productDetails.cell.join(', ')}
//           </span>
//         </li>
//       )}
//     </ul>
//   </div>
// );