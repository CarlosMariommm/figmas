export const mockTasks = [
  {
    id: 't1',
    title: 'Idea principal',
    description: 'descripción\ndescripción\ndescripción',
    status: 'todo', // 'todo', 'in-progress', 'done', 'past'
    tags: [{ color: 'bg-green-500', label: 'etiqueta' }],
    assignees: [
      { id: 'u1', initials: 'VH', color: 'bg-blue-600' },
      { id: 'u2', initials: 'AG', color: 'bg-orange-400' }
    ]
  },
  {
    id: 't2',
    title: 'Idea principal',
    description: 'descripción\ndescripción\ndescripción',
    status: 'todo',
    tags: [{ color: 'bg-blue-400', label: 'etiqueta' }],
    assignees: [
      { id: 'u3', initials: 'ML', color: 'bg-pink-500' }
    ]
  },
  {
    id: 't3',
    title: 'Idea principal',
    description: 'descripción\ndescripción\ndescripción',
    status: 'in-progress',
    tags: [{ color: 'bg-pink-500', label: 'etiqueta' }],
    assignees: [
      { id: 'u1', initials: 'VH', color: 'bg-blue-600' },
      { id: 'u4', initials: 'LK', color: 'bg-green-500' }
    ]
  },
  {
    id: 't4',
    title: 'Idea principal',
    description: 'descripción\ndescripción\ndescripción',
    status: 'done',
    tags: [{ color: 'bg-pink-500', label: 'etiqueta' }],
    assignees: [
      { id: 'u5', initials: 'HU', color: 'bg-pink-500' },
      { id: 'u6', initials: 'NL', color: 'bg-orange-400' }
    ]
  },
  {
    id: 't5',
    title: 'Idea principal',
    description: 'descripción\ndescripción\ndescripción',
    status: 'done',
    tags: [{ color: 'bg-blue-400', label: 'etiqueta' }],
    assignees: [
      { id: 'u2', initials: 'AG', color: 'bg-orange-400' }
    ]
  },
  {
    id: 't6',
    title: 'Idea principal',
    description: 'descripción\ndescripción\ndescripción',
    status: 'done',
    tags: [{ color: 'bg-green-500', label: 'etiqueta' }],
    assignees: [
      { id: 'u1', initials: 'VH', color: 'bg-blue-600' },
      { id: 'u2', initials: 'AG', color: 'bg-orange-400' }
    ]
  },
  {
    id: 't7',
    title: 'Idea principal',
    description: 'descripción\ndescripción\ndescripción',
    status: 'past',
    tags: [{ color: 'bg-green-500', label: 'etiqueta' }],
    assignees: [
      { id: 'u1', initials: 'VH', color: 'bg-blue-600' },
      { id: 'u2', initials: 'AG', color: 'bg-orange-400' }
    ]
  },
  {
    id: 't8',
    title: 'Idea principal',
    description: 'descripción\ndescripción\ndescripción',
    status: 'past',
    tags: [{ color: 'bg-blue-400', label: 'etiqueta' }],
    assignees: [
      { id: 'u3', initials: 'ML', color: 'bg-pink-500' }
    ]
  }
];
