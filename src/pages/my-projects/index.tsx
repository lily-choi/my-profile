import Layout from "@/components/Layout";
import PROJECT_LIST from "@/pages/my-projects/projectList";

export default function MyProject() {
  return (
    <Layout>
      <section className="" style={{ margin: "auto 15%" }}>
        <h2 className="block text-2xl font-bold mb-7">Projects</h2>
        <div className="flex flex-wrap flex-start justify-between cursor-pointer">
          {PROJECT_LIST.map((item, i) => {
            return (
              <div key={i} style={{ width: "47%", marginBottom: "80px" }}>
                <span
                  className="block h-60 mb-7"
                  style={{
                    backgroundImage: `url(${item.image.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></span>
                <h3 className="font-semibold text-xl">{item.name}</h3>
                <span className="block text-gray-400 font-thin text-sm mb-3">
                  {item.info}
                </span>
                <p className="text-sm">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
