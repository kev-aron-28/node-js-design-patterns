const module = (() => {
  const private = 'foo'

  const exported = {
    func1: () => { console.log('HI') }
  }

  return exported;
})();

