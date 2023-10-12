import Layout from "@/components/Layout";
import main from "@/common/assets/images/main.png";

export default function Main() {
  return (
    <Layout>
      <div className="">
        <div className="flex justify-center">
          <div className="w-2/5">
            <strong className="block font-bold text-xl mb-8">
              Get to know more about Hyeji!
            </strong>
            <p className="mb-5">
              I recently graduated from the University. I recently graduated
              from the University. I recently graduated from the University. I
              recently graduated from the University
            </p>
            <p>
              I recently graduated from the University. I recently graduated
              from the University. I recently graduated from the University. I
              recently graduated from the University
            </p>
          </div>
          <span
            className="block h-96 mb-7 w-96"
            style={{
              backgroundImage: `url(${main.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></span>
        </div>
      </div>
    </Layout>
  );
}
