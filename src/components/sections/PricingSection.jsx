import { Icon } from "@iconify/react";

const plans = [
  {
    name: "Creator",
    price: "$0",
    period: "/mo",
    description: "Perfect for independent artists starting with Gen AI.",
    features: ["100 Generations/mo", "1080p Video Export", "Standard Queue"],
    cta: "Start Free",
    highlighted: false
  },
  {
    name: "Studio",
    price: "$49",
    period: "/seat/mo",
    description: "Advanced workflows for professional creative teams.",
    features: ["Unlimited Generations", "4K Spatial Video", "Priority Fast Queue"],
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Custom models and API access for massive scale.",
    features: ["Dedicated Render Nodes", "Custom LoRA Training", "API / Integration Support"],
    cta: "Contact Sales",
    highlighted: false
  }
];

function PricingSection() {
  return (
    <section id="pricing" className="max-w-[1200px] mx-auto px-6 pb-32 pt-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-medium text-slate-900 tracking-tight mb-4">Pricing for Creatives</h2>
        <p className="text-lg text-slate-500 font-light">Start rendering for free. Scale to cinematic resolution.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`glass-panel p-10 rounded-[2rem] flex flex-col border relative overflow-hidden ${
              plan.highlighted ? "bg-white/70 border-blue-200 shadow-xl" : "border-white/60"
            }`}
          >
            {plan.highlighted && <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px]" />}
            {plan.badge && <div className="text-xs font-semibold tracking-wider uppercase text-purple-600 mb-2">{plan.badge}</div>}

            <h3 className="text-xl font-medium text-slate-900 mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-semibold text-slate-900">{plan.price}</span>
              <span className="text-slate-500">{plan.period}</span>
            </div>
            <p className="text-sm text-slate-500 mb-8 font-light">{plan.description}</p>

            <ul className="space-y-4 mb-10 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-slate-700">
                  <Icon
                    icon="solar:check-circle-linear"
                    className={plan.highlighted ? "text-purple-500" : "text-blue-500"}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-xl font-medium transition-colors ${
                plan.highlighted
                  ? "bg-slate-900 text-white hover:bg-slate-800 shadow-lg"
                  : "border border-slate-300 text-slate-700 hover:bg-white/50"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
