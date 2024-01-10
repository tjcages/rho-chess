import { useHubspotForm } from "next-hubspot";

interface Props {
  expanded: boolean;
  set: (expanded: boolean) => void;
}

const _ = ({ expanded, set }: Props) => {
  const { loaded, error, formCreated } = useHubspotForm({
    portalId: "39998325",
    formId: "a40c1cb6-298f-43bb-afea-216c506a48d9",
    target: "#hubspot-form-wrapper",
  });

  return (
    <div
      className="absolute left-0 right-0 bottom-0 px-6 md:px-8 pt-12 md:pt-24 pb-4
     md:pb-6 bg-gradient-to-t from-white via-white/90 pointer-events-none"
    >
      <div
        id="hubspot-form-wrapper"
        className={`absolute left-6 md:left-8 right-6 md:right-8 bottom-4 bg-gradient-to-t from-white via-white/90 md:bottom-6 transition-opacity duration-500 ease-out ${
          expanded
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />
      <button
        className={`w-full pointer-events-auto transition-opacity duration-500 ease-out ${
          expanded ? "opacity-0" : "opacity-100"
        }`}
        onClick={() => set(true)}
      >
        Download whitepaper
      </button>
    </div>
  );
};

export default _;
