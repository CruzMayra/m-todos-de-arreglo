describe("miForEach", () => {
  it("returns index number of array element if passed array", () => {
    var ninjaKittie = jasmine.createSpy();
    miForEach([2, 5, , 9], ninjaKittie)
    expect(ninjaKittie.calls.count()).toEqual(4);
    expect(ninjaKittie.calls.argsFor(0)).toEqual([2]);
    expect(ninjaKittie.calls.argsFor(1)).toEqual([5]);
    expect(ninjaKittie.calls.argsFor(2)).toEqual([undefined]);
    expect(ninjaKittie.calls.argsFor(3)).toEqual([9]);
  });
});

describe("miMap", () => {
  it("returns number squared if passed array with numbers", () => {
    expect(miMap([1, 2, 3, 4, 5, 6], numberSquared)).toEqual([1, 4, 9, 16, 25, 36]);
  });
});

describe("miFilter", () => {
  it("returns aggregate if passed array with numbers", () => {
    expect(miFilter([1, 2, 3, 4, 5, 6], greaterThanThree)).toEqual([4, 5, 6]);
  });
});

describe("miReduce", () => {
  it("returns aggregate if passed array with numbers", () => {
    expect(miReduce([1, 2, 3, 4, 5, 6], numbersTotalSum, 0)).toEqual(21);
  });
});
