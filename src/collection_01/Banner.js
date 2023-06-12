/*
Given the declaration below,
  which of the following will show visible display ?
      <Banner warn="" />
      <Banner warn />
      <Banner warn="true" />
      <Banner warn="false" />
      <Banner warn={false} />
      <Banner warn={true} />
*/
const Banner = (prop) => {
  if (!prop.warn) {
    return null;
  }
  return <div className="warning">warning</div>;
};

export default Banner;
