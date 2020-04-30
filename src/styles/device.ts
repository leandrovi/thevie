const size = {
  mobile: 320,
  mobileLandscape: 560,
  tablet: 768,
  tabletLandscape: 1024,
  laptop: 1024,
  desktop: 1500,
  desktopL: 2360,
};

export default {
  mobile: `(min-width: ${size.mobile}px)`,
  mobileLandscape: `(min-width: ${size.mobileLandscape}px) and (orientation: landscape)`,
  tablet: `(min-width: ${size.tablet}px)`,
  tabletLandscape: `(min-width: ${size.tabletLandscape}px) and (orientation: landscape)`,
  laptop: `(min-width: ${size.laptop}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
  desktopL: `(min-width: ${size.desktopL}px)`,
};
