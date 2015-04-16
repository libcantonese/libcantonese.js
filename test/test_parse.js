var assert = require("assert")
var libcantonese = require("../libcantonese.js")
describe('Parse', function(){
  describe('#parse_lshk()', function(){
    it('should parse all valid lshk correctly', function(){
      // aa
      assert.deepEqual(libcantonese.parse_lshk('aa'),  [''  ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('baa'), ['b' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('paa'), ['p' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('maa'), ['m' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('faa'), ['f' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('daa'), ['d' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('taa'), ['t' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('naa'), ['n' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('laa'), ['l' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('gaa'), ['g' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('kaa'), ['k' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('ngaa'),['ng','aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('haa'), ['h' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('gwaa'),['gw','aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('kwaa'),['kw','aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('waa'), ['w' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('zaa'), ['z' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('caa'), ['c' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('saa'), ['s' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('jaa'), ['j' ,'aa', '']);
    });
  });
  describe('#parse_yale()', function(){
    it('should parse all valid yale correctly', function(){
      // a
      assert.deepEqual(libcantonese.parse_yale('a'),  [''  ,'a', '']);
      assert.deepEqual(libcantonese.parse_yale('ba'), ['b' ,'a', '']);
      assert.deepEqual(libcantonese.parse_yale('pa'), ['p' ,'a', '']);
      assert.deepEqual(libcantonese.parse_yale('ma'), ['m' ,'a', '']);
      assert.deepEqual(libcantonese.parse_yale('fa'), ['f' ,'a', '']);
      assert.deepEqual(libcantonese.parse_yale('da'), ['d' ,'a', '']);
      assert.deepEqual(libcantonese.parse_yale('ta'), ['t' ,'a', '']);
      assert.deepEqual(libcantonese.parse_yale('na'), ['n' ,'a', '']);
      assert.deepEqual(libcantonese.parse_yale('la'), ['l' ,'a', '']);
      assert.deepEqual(libcantonese.parse_yale('ga'), ['g' ,'a', '']);
      assert.deepEqual(libcantonese.parse_yale('ka'), ['k' ,'a', '']);
      assert.deepEqual(libcantonese.parse_yale('nga'),['ng','a', '']);
      assert.deepEqual(libcantonese.parse_yale('ha'), ['h' ,'a', '']);
      assert.deepEqual(libcantonese.parse_yale('gwa'),['gw','a', '']);
      assert.deepEqual(libcantonese.parse_yale('kwa'),['kw','a', '']);
      assert.deepEqual(libcantonese.parse_yale('wa'), ['w' ,'a', '']);
      assert.deepEqual(libcantonese.parse_yale('ja'), ['j' ,'a', '']);
      assert.deepEqual(libcantonese.parse_yale('cha'),['ch','a', '']);
      assert.deepEqual(libcantonese.parse_yale('sa'), ['s' ,'a', '']);
      assert.deepEqual(libcantonese.parse_yale('ya'), ['y' ,'a', '']);
    });
  });
  describe('#parse_hked()', function(){
    it('should parse all valid hked correctly', function(){
      // a
      assert.deepEqual(libcantonese.parse_hked('a'),  [''  ,'a', '']);
      assert.deepEqual(libcantonese.parse_hked('ba'), ['b' ,'a', '']);
      assert.deepEqual(libcantonese.parse_hked('pa'), ['p' ,'a', '']);
      assert.deepEqual(libcantonese.parse_hked('ma'), ['m' ,'a', '']);
      assert.deepEqual(libcantonese.parse_hked('fa'), ['f' ,'a', '']);
      assert.deepEqual(libcantonese.parse_hked('da'), ['d' ,'a', '']);
      assert.deepEqual(libcantonese.parse_hked('ta'), ['t' ,'a', '']);
      assert.deepEqual(libcantonese.parse_hked('na'), ['n' ,'a', '']);
      assert.deepEqual(libcantonese.parse_hked('la'), ['l' ,'a', '']);
      assert.deepEqual(libcantonese.parse_hked('ga'), ['g' ,'a', '']);
      assert.deepEqual(libcantonese.parse_hked('ka'), ['k' ,'a', '']);
      assert.deepEqual(libcantonese.parse_hked('nga'),['ng','a', '']);
      assert.deepEqual(libcantonese.parse_hked('ha'), ['h' ,'a', '']);
      assert.deepEqual(libcantonese.parse_hked('gwa'),['gw','a', '']);
      assert.deepEqual(libcantonese.parse_hked('kwa'),['kw','a', '']);
      assert.deepEqual(libcantonese.parse_hked('wa'), ['w' ,'a', '']);
      assert.deepEqual(libcantonese.parse_hked('dza'),['dz','a', '']);
      assert.deepEqual(libcantonese.parse_hked('tsa'),['ts','a', '']);
      assert.deepEqual(libcantonese.parse_hked('sa'), ['s' ,'a', '']);
      assert.deepEqual(libcantonese.parse_hked('ja'), ['j' ,'a', '']);
    });
  });
  describe('#parse_slau()', function(){
    it('should parse all valid slau correctly', function(){
      // a
      assert.deepEqual(libcantonese.parse_slau('a'),  [''  ,'a', '']);
      assert.deepEqual(libcantonese.parse_slau('ba'), ['b' ,'a', '']);
      assert.deepEqual(libcantonese.parse_slau('pa'), ['p' ,'a', '']);
      assert.deepEqual(libcantonese.parse_slau('ma'), ['m' ,'a', '']);
      assert.deepEqual(libcantonese.parse_slau('fa'), ['f' ,'a', '']);
      assert.deepEqual(libcantonese.parse_slau('da'), ['d' ,'a', '']);
      assert.deepEqual(libcantonese.parse_slau('ta'), ['t' ,'a', '']);
      assert.deepEqual(libcantonese.parse_slau('na'), ['n' ,'a', '']);
      assert.deepEqual(libcantonese.parse_slau('la'), ['l' ,'a', '']);
      assert.deepEqual(libcantonese.parse_slau('ga'), ['g' ,'a', '']);
      assert.deepEqual(libcantonese.parse_slau('ka'), ['k' ,'a', '']);
      assert.deepEqual(libcantonese.parse_slau('nga'),['ng','a', '']);
      assert.deepEqual(libcantonese.parse_slau('ha'), ['h' ,'a', '']);
      assert.deepEqual(libcantonese.parse_slau('gwa'),['gw','a', '']);
      assert.deepEqual(libcantonese.parse_slau('kwa'),['kw','a', '']);
      assert.deepEqual(libcantonese.parse_slau('wa'), ['w' ,'a', '']);
      assert.deepEqual(libcantonese.parse_slau('ja'), ['j' ,'a', '']);
      assert.deepEqual(libcantonese.parse_slau('cha'),['ch','a', '']);
      assert.deepEqual(libcantonese.parse_slau('sa'), ['s' ,'a', '']);
      assert.deepEqual(libcantonese.parse_slau('ya'), ['y' ,'a', '']);
    });
  });
})
