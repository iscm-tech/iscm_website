"use client";

import { Image } from "antd";

// const MasonryStyled = styled.div`
//   width: 100%;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
//   grid-auto-rows: 12.5rem;
//   grid-auto-flow: dense;
//   gap: 0.75rem;

//   figure {
//     overflow: hidden;
//     display: grid;
//     grid-template-columns: minmax(0, 1fr);
//     grid-template-rows: minmax(0, 1fr);
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//     border-radius: 10px;

//     img {
//       grid-area: 1 / 1 / -1 / -1;
//       z-index: 1;
//       inline-size: 100%;
//       block-size: 100%;
//       object-fit: cover;
//       transition: scale 1s ease-in-out;
//     }

//     &:hover img {
//       scale: 1.125;
//     }

//     @media (width > 600px) {
//       &:first-child {
//         grid-area: span 2 / span 2;
//       }

//       &:nth-child(4n + 1) {
//         grid-row: span 2;
//       }

//       &:nth-child(4n + 2) {
//         grid-column: span 2;
//       }
//     }
//   }
// `;

export default function Masonry({
  gallery,
  itemStyle,
  imageStyle,
}: {
  gallery: string[];
  itemStyle?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
}) {
  return (
    <div className="w-full" style={{ columnCount: 3, columnGap: "16px" }}>
      <Image.PreviewGroup>
        {gallery.map((image) => (
          <figure
            className="w-full h-fit shadow-lg mb-3 !cursor-zoom-in"
            key={image}
            style={itemStyle}
          >
            <Image
              className="w-full object-contain"
              src={image}
              alt={image}
              loading="lazy"
              preview={{
                mask: <></>,
              }}
              style={imageStyle}
            />
          </figure>
        ))}
      </Image.PreviewGroup>
    </div>
  );
}
