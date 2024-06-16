export const commerce = {
    products: {
      list: jest.fn(() => Promise.resolve({ data: [{ id: '1', name: 'Test Product' }] })),
    },
    cart: {
      retrieve: jest.fn(() => Promise.resolve({ total_items: 0 })),
      add: jest.fn(() => Promise.resolve({ cart: { total_items: 1 } })),
      update: jest.fn(() => Promise.resolve({ cart: { total_items: 1 } })),
      remove: jest.fn(() => Promise.resolve({ cart: { total_items: 0 } })),
      empty: jest.fn(() => Promise.resolve({ cart: { total_items: 0 } })),
    },
    checkout: {
      capture: jest.fn(() => Promise.resolve({})),
    },
  };
  