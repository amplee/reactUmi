const initialData = {
  tasks: {
    'taks1-1': { id:'taks1-1', content: 'sssssssss1' },
    'taks1-2': { id:'taks1-2', content: 'sssssssss2' },
    'taks1-3': { id:'taks1-3', content: 'sssssssss3' },
    'taks1-4': { id:'taks1-4', content: 'sssssssss4' },
    'taks1-5': { id:'taks1-5', content: 'sssssssss5' },
    'taks1-6': { id:'taks1-6', content: 'sssssssss6' },
  },
  columns: {
    'column-1': { 
      id:'column-1', 
      title: 'In Progress',
      taskIds: ['taks1-1', 'taks1-2', 'taks1-3', 'taks1-4', 'taks1-5', 'taks1-6'] 
    },
    'column-2': { 
      id:'column-2', 
      title: 'TO DO',
      taskIds: [] 
    },
    'column-3': { 
      id:'column-3', 
      title: 'Done',
      taskIds: [] 
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3']
};

export default initialData