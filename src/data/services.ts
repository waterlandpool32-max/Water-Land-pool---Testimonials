export interface Service {
  title: string;
  subtitle: string;
  description: string;
  included: string[];
  forWho: string[];
  whyUs: string;
  gallery?: string[];
}

export const serviceData: Record<string, Service> = {
  'leak-detection': {
    title: 'Pool Leak Detection in Central Florida',
    subtitle: 'Accurate pool leak detection services to identify hidden leaks, prevent water loss, and protect your pool from costly damage.',
    description: 'A leaking pool can lead to more than just water loss. It can cause structural damage, increase utility costs, and affect the overall performance of your pool system. At Waterland Pool\'s, our pool leak detection service is designed to quickly and accurately identify the source of the problem using specialized tools and proven techniques.',
    included: [
      'Detailed inspection of the pool structure and surfaces',
      'Pressure testing of plumbing lines',
      'Equipment and system evaluation',
      'Identification of underground or hidden leaks',
      'Clear assessment of the issue and recommended next steps'
    ],
    forWho: [
      'Homeowners noticing unexplained water loss',
      'Pools requiring frequent refilling',
      'Properties with signs of cracks, wet spots, or shifting ground',
      'Anyone concerned about potential hidden leaks'
    ],
    whyUs: 'With over 20 years of experience, Waterland Pool\'s provides reliable pool leak detection services with attention to detail and accurate diagnostics. We focus on identifying the real source of the problem, helping you avoid unnecessary repairs.',
    gallery: [
      'https://picsum.photos/seed/leak1/1000/800',
      'https://picsum.photos/seed/leak2/1000/800',
      'https://picsum.photos/seed/leak3/1000/800',
      'https://picsum.photos/seed/leak4/1000/800',
      'https://picsum.photos/seed/leak5/1000/800',
      'https://picsum.photos/seed/leak6/1000/800'
    ]
  },
  'cleaning': {
    title: 'Pool Cleaning & Maintenance in Central Florida',
    subtitle: 'Professional weekly pool cleaning and maintenance service to keep your pool clean, balanced, and ready to enjoy all year long.',
    description: 'A well-maintained pool requires more than occasional cleaning. It needs consistent care, proper chemical balance, and regular system checks to ensure everything runs smoothly. At Waterland Pool\'s, our weekly pool cleaning and maintenance service ensures your pool stays clean, balanced, and properly maintained year-round.',
    included: [
      'Skimming debris from the surface',
      'Brushing walls, steps, and tiles',
      'Vacuuming the pool',
      'Emptying skimmer and pump baskets',
      'Checking and balancing water chemistry',
      'Inspecting equipment for proper operation',
      'Monitoring water level and circulation'
    ],
    forWho: [
      'Homeowners who want a clean, ready-to-use pool without the hassle',
      'Busy families who don’t have time for regular maintenance',
      'Property owners who want to protect their investment'
    ],
    whyUs: 'With over 20 years of experience, Waterland Pool\'s provides weekly pool cleaning and maintenance service tailored to each pool. We don’t just clean your pool — we maintain it with care, consistency, and attention to detail.',
    gallery: [
      'https://picsum.photos/seed/clean1/1000/800',
      'https://picsum.photos/seed/clean2/1000/800',
      'https://picsum.photos/seed/clean3/1000/800',
      'https://picsum.photos/seed/clean4/1000/800'
    ]
  },
  'renovations': {
    title: 'Pool & Deck Renovation in Central Florida',
    subtitle: 'Professional pool and deck renovation services designed to upgrade your outdoor space with modern finishes and long-lasting results.',
    description: 'Over time, pools and outdoor areas can show signs of wear, outdated design, or structural issues. At Waterland Pool\'s, our pool and deck renovation services are designed to restore, upgrade, and transform your space with high-quality materials and expert craftsmanship.',
    included: [
      'Pool resurfacing and interior finish upgrades',
      'Installation of new pavers and deck surfaces',
      'Tile replacement and coping updates',
      'Structural repairs and surface restoration',
      'Design enhancements for improved layout',
      'Equipment upgrades and integration'
    ],
    forWho: [
      'Homeowners with outdated or worn pool areas',
      'Properties showing cracks, stains, or surface damage',
      'Clients looking to upgrade their outdoor living space',
      'Homeowners planning to increase property value'
    ],
    whyUs: 'With over 20 years of experience, Waterland Pool\'s delivers pool and deck renovation services with precision, attention to detail, and high-quality standards. We approach every project with a clear plan.',
    gallery: [
      'https://picsum.photos/seed/reno1/1000/800',
      'https://picsum.photos/seed/reno2/1000/800',
      'https://picsum.photos/seed/reno3/1000/800',
      'https://picsum.photos/seed/reno4/1000/800',
      'https://picsum.photos/seed/reno5/1000/800',
      'https://picsum.photos/seed/reno6/1000/800',
      'https://picsum.photos/seed/reno7/1000/800',
      'https://picsum.photos/seed/reno8/1000/800',
      'https://picsum.photos/seed/reno9/1000/800',
      'https://picsum.photos/seed/reno10/1000/800',
      'https://picsum.photos/seed/reno11/1000/800',
      'https://picsum.photos/seed/reno12/1000/800',
      'https://picsum.photos/seed/reno13/1000/800',
      'https://picsum.photos/seed/reno14/1000/800',
      'https://picsum.photos/seed/reno15/1000/800',
      'https://picsum.photos/seed/reno16/1000/800',
      'https://picsum.photos/seed/reno17/1000/800',
      'https://picsum.photos/seed/reno18/1000/800',
      'https://picsum.photos/seed/reno19/1000/800',
      'https://picsum.photos/seed/reno20/1000/800',
      'https://picsum.photos/seed/reno21/1000/800'
    ]
  },
  'equipment': {
    title: 'Pool Equipment Repair & Installation in Central Florida',
    subtitle: 'Professional pool equipment repair and installation services to keep your system running efficiently, safely, and reliably.',
    description: 'Your pool equipment is essential to maintaining clean water, proper circulation, and overall system performance. When something isn’t working correctly, it can quickly affect the condition of your entire pool.',
    included: [
      'Pump repair and replacement',
      'Filter repair and installation',
      'Heater repair and installation',
      'Pool automation system setup',
      'System diagnostics and troubleshooting',
      'Equipment upgrades for improved efficiency'
    ],
    forWho: [
      'Homeowners experiencing equipment malfunctions',
      'Pools with poor circulation or filtration issues',
      'Systems that are outdated or inefficient',
      'Clients looking to upgrade to modern equipment'
    ],
    whyUs: 'With over 20 years of experience, Waterland Pool\'s delivers pool equipment repair and installation services with precision and reliability. We focus on accurate diagnostics.',
    gallery: [
      'https://picsum.photos/seed/equip1/1000/800',
      'https://picsum.photos/seed/equip2/1000/800',
      'https://picsum.photos/seed/equip3/1000/800',
      'https://picsum.photos/seed/equip4/1000/800',
      'https://picsum.photos/seed/equip5/1000/800',
      'https://picsum.photos/seed/equip6/1000/800',
      'https://picsum.photos/seed/equip7/1000/800',
      'https://picsum.photos/seed/equip8/1000/800',
      'https://picsum.photos/seed/equip9/1000/800',
      'https://picsum.photos/seed/equip10/1000/800',
      'https://picsum.photos/seed/equip11/1000/800'
    ]
  },
  'sealing': {
    title: 'Paver Sealing for Pool Decks in Central Florida',
    subtitle: 'Professional paver sealing services to protect your pool deck, enhance its appearance, and extend its lifespan.',
    description: 'Pool decks are constantly exposed to sun, water, and heavy use, which can lead to fading, staining, and surface deterioration over time. Our paver sealing service is designed to protect and preserve your pool deck.',
    included: [
      'Thorough cleaning of the paver surface',
      'Removal of dirt, stains, and buildup',
      'Surface preparation for proper sealant',
      'Application of high-quality protective sealant',
      'Enhancement of color and surface finish',
      'Protection against moisture and wear'
    ],
    forWho: [
      'Homeowners with faded or stained pool decks',
      'Paver surfaces exposed to heavy sun and water',
      'Outdoor areas showing signs of wear',
      'Clients looking to protect their investment'
    ],
    whyUs: 'With over 20 years of experience, Waterland Pool\'s delivers professional paver sealing services with attention to detail and high-quality materials.',
    gallery: [
      'https://picsum.photos/seed/seal1/1000/800',
      'https://picsum.photos/seed/seal2/1000/800',
      'https://picsum.photos/seed/seal3/1000/800',
      'https://picsum.photos/seed/seal4/1000/800',
      'https://picsum.photos/seed/seal5/1000/800',
      'https://picsum.photos/seed/seal6/1000/800',
      'https://picsum.photos/seed/seal7/1000/800'
    ]
  },
  'acid-wash': {
    title: 'Acid Wash & Deep Pool Cleaning in Central Florida',
    subtitle: 'Professional acid wash and deep cleaning services to restore your pool’s appearance by removing stains and algae.',
    description: 'Over time, pools can develop stubborn stains, algae buildup, and discoloration that regular cleaning cannot remove. Our acid wash and deep pool cleaning service is designed to remove deep-set stains.',
    included: [
      'Draining the pool when necessary',
      'Removal of algae, stains, and mineral buildup',
      'Acid wash treatment for surface restoration',
      'Detailed cleaning of walls, steps, and floor',
      'Inspection of surface condition',
      'Preparation for refilling and system restart'
    ],
    forWho: [
      'Pools with visible stains or discoloration',
      'Pools affected by algae buildup',
      'Surfaces with calcium or mineral deposits',
      'Homeowners looking to restore the original look'
    ],
    whyUs: 'With over 20 years of experience, Waterland Pool\'s provides acid wash and deep pool cleaning services with precision and attention to detail.',
    gallery: [
      'https://picsum.photos/seed/acid1/1000/800',
      'https://picsum.photos/seed/acid2/1000/800',
      'https://picsum.photos/seed/acid3/1000/800',
      'https://picsum.photos/seed/acid4/1000/800',
      'https://picsum.photos/seed/acid5/1000/800',
      'https://picsum.photos/seed/acid6/1000/800',
      'https://picsum.photos/seed/acid7/1000/800',
      'https://picsum.photos/seed/acid8/1000/800',
      'https://picsum.photos/seed/acid9/1000/800',
      'https://picsum.photos/seed/acid10/1000/800',
      'https://picsum.photos/seed/acid11/1000/800'
    ]
  },
  'automation': {
    title: 'Pool Automation & Control Systems in Central Florida',
    subtitle: 'Smart pool automation solutions that give you full control over your pool’s features with convenience and modern technology.',
    description: 'Modern pool automation systems allow you to control and manage your pool with ease, improving both convenience and performance. From your smartphone or tablet, you can control key features like heating, lighting, and pumps.',
    included: [
      'Installation of smart pool automation systems',
      'Integration with pumps, heaters, and lighting',
      'Setup and configuration of mobile app control',
      'System upgrades for existing equipment',
      'Testing and optimization for performance',
      'Guidance on system use and features'
    ],
    forWho: [
      'Homeowners looking to upgrade with smart tech',
      'Clients who want more control and convenience',
      'Pools with outdated or manual systems',
      'Homeowners interested in improving efficiency'
    ],
    whyUs: 'With over 20 years of experience, Waterland Pool\'s delivers pool automation and control system solutions with precision and attention to detail.',
    gallery: [
      'https://picsum.photos/seed/auto1/1000/800',
      'https://picsum.photos/seed/auto2/1000/800',
      'https://picsum.photos/seed/auto3/1000/800',
      'https://picsum.photos/seed/auto4/1000/800',
      'https://picsum.photos/seed/auto5/1000/800',
      'https://picsum.photos/seed/auto6/1000/800'
    ]
  }
};
