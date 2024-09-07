const cards = [
  {
    name: 'Basic corporate',
    status: 'active',
    color: '#e7eaff',
    cardColor: '#8789fa',
    issues: 8,
    badge: 'primary',
    users: [
      { name: 'Darlene', image: { src: 'Darlene.png', alt: 'User-Darlene' } },
      { name: 'Ed', image: { src: 'Ed.png', alt: 'User-Ed' } },
      { name: 'Ezra', image: { src: 'Ezra.png', alt: 'User-Ezra' } },
      {
        name: 'Jeniffer',
        image: { src: 'Jeniffer.png', alt: 'User-Jeniffer' },
      },
      { name: 'Karim', image: { src: 'Karim.png', alt: 'User-Karim' } },
      { name: 'Kim', image: { src: 'Kim.png', alt: 'User-Kim' } },
      { name: 'Krishna', image: { src: 'Krishna.png', alt: 'User-Krishna' } },
      { name: 'Mary', image: { src: 'Mary.png', alt: 'User-Mary' } },
    ],
  },
  {
    name: 'Design team expenses',
    status: 'active',
    color: '#e7ffe7',
    cardColor: '#7eff80',
    issues: 3,
    badge: 'success',
    users: [
      { name: 'Mary', image: { src: 'Mary.png', alt: 'User-Mary' } },
      { name: 'Karim', image: { src: 'Karim.png', alt: 'User-Karim' } },
    ],
  },
  {
    name: 'Office management',
    status: 'suspended',
    color: '#fff5e7',
    cardColor: '#faca87',
    issues: 8,
    badge: 'warning',
    users: [
      { name: 'Ezra', image: { src: 'Ezra.png', alt: 'User-Ezra' } },
      { name: 'Ed', image: { src: 'Ed.png', alt: 'User-Ed' } },
      { name: 'Darlene', image: { src: 'Darlene.png', alt: 'User-Darlene' } },
    ],
  },
];

export default cards;
