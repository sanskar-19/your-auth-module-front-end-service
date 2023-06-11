const DetectionDetails = ({ detectionDetails, imageURI }) => {
  console.log(detectionDetails);
  return (
    <section className="flex items-center gap-x-8 font-be_vietnam_pro">
      <div className="w-1/2">
        <img
          src={imageURI}
          alt=""
          className="object-contain h-[25rem] w-[25rem] rounded-sm overflow-hidden"
        />
      </div>
      <div className="w-1/2 flex text-white flex-col gap-y-2">
        <fieldset className="flex rounded-sm flex-col gap-y-2 border-2 border-white py-2 px-2">
          <legend className="ml-2">
            <h2 className="font-be_vietnam_pro text-2xl font-medium">
              Patient Results
            </h2>
          </legend>
          <div className="flex gap-x-2">
            <div className="relative">Name :</div>
            <div className="relative">{detectionDetails?.patient?.Name}</div>
          </div>
          <div className="flex gap-x-2">
            <div className="relative">Age :</div>
            <div className="relative">{detectionDetails?.patient?.Age}</div>
          </div>
          <div className="flex gap-x-2">
            <div className="relative">Contact :</div>
            <div className="relative">{detectionDetails?.patient?.Contact}</div>
          </div>
          <div className="flex gap-x-2">
            <div className="relative">Result :</div>
            <div className="relative">
              {detectionDetails?.results?.category}
            </div>
          </div>
        </fieldset>
      </div>
    </section>
  );
};

export default DetectionDetails;
