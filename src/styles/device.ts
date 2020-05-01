const size = {
  mobile: 320,
  tablet: 768,
  laptop: 1200,
  desktop: 1900,
  mac: 2300,
};

export default {
  mobile: `(min-width: ${size.mobile}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  mac: `(min-width: ${size.mac}px)`,
};
