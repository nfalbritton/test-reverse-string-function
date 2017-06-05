describe('reverseString', () => {

  describe('new reverseString()', () => {
    it('takes a word as an argument', () => {
      expect(reverseString('result')).toBeDefined();
    });

    it('returns a string', () => {
      let result;
      expect(reverseString('result')).toEqual(jasmine.any(String));
    });

    it('reverses string order without the last character', () => {
      let result;
      expect(reverseString('cat')).toEqual('ac');
    });

  });
});
