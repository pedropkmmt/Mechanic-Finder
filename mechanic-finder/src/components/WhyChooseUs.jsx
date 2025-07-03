import { Shield, Award, DollarSign, Users } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Verified Mechanics",
      description: "Certified professionals with verified credentials and quality guarantees."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Quality Guaranteed",
      description: "Workmanship backed by our comprehensive quality assurance program."
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Fair Pricing",
      description: "Transparent pricing with no hidden fees. Get honest quotes every time."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Expert Support",
      description: "24/7 customer support to help you find the right mechanic for your needs."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Trusted by thousands of customers nationwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs