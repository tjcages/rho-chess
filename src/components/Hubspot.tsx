import { useHubspotForm } from "next-hubspot";

const _ = () => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "39998325",
    formId: "a40c1cb6-298f-43bb-afea-216c506a48d9",
    target: "#hubspot-form-wrapper",
  });

  return (
    <div className="absolute left-0 right-0 bottom-0 px-6 md:px-12 pt-10 pb-4 md:py-16 bg-gradient-to-t from-white">
      <div id="hubspot-form-wrapper" />
    </div>
  );
};

export default _;
