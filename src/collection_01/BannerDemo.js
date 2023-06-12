import Banner from "../collection_01/Banner";

const BannerDemo = () => {
  // which of the following will show visible display ?
  return (
    <>
      <Banner warn="" />
      <Banner warn />
      <Banner warn="true" />
      <Banner warn="false" />
      <Banner warn={false} />
      <Banner warn={true} />
    </>
  );
};

export default BannerDemo;
