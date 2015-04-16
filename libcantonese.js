(function(){
  var libcantonese = {}
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = libcantonese;
  } else {
    this.libcantonese = libcantonese;
  }
  var LSHK = 0;
  var YALE = 1;
  var HKED = 2;
  var SLAU = 3;
  var onsets = [
    ['b','p','m','f','d','t','n','l','g','k','h','ng','z' ,'c', 's','gw','kw','j','w'], // lshk
    ['b','p','m','f','d','t','n','l','g','k','h','ng','j' ,'ch','s','gw','kw','y','w'], // yale
    ['b','p','m','f','d','t','n','l','g','k','h','ng','dz','ts','s','gw','kw','j','w'], // hked
    ['b','p','m','f','d','t','n','l','g','k','h','ng','j' ,'ch','s','gw','kw','y','w']  // slau
  ];
  var finals = [
    ['aa','aai','aau','aam','aan','aang','aap','aat','aak','ai','au','am','an','ang','ap','at','ak',
    'e','ei','eng','ek','i','iu','im','in','ing','ip','it','ik','o' ,'oi','ou','on','ong','ot','ok',
    'u' ,'ui' ,'un' ,'ung','ut' ,'uk','oe' ,'oeng','oek','eoi','eon','eot','yu','yun','yut','m','ng'], //lshk
    ['a' ,'aai','aau','aam','aan','aang','aap','aat','aak','ai','au','am','an','ang','ap','at','ak',
    'e','ei','eng','ek','i','iu','im','in','ing','ip','it','ik','o' ,'oi','ou','on','ong','ot','ok',
    'u' ,'ui' ,'un' ,'ung','ut' ,'uk','eu' ,'eung','euk','eui','eun','eut','yu','yun','yut','m','ng'], //yale
    ['a' ,'aai','aau','aam','aan','aang','aap','aat','aak','ai','au','am','an','ang','ap','at','ak',
    'e','ei','eng','ek','i','iu','im','in','ing','ip','it','ik','o' ,'oi','ou','on','ong','ot','ok',
    'u' ,'ui' ,'un' ,'ung','ut' ,'uk','oe' ,'oeng','oek','oey','oen','oet','y' ,'yn' ,'yt' ,'m','ng'], //hked
    ['a' ,'aai','aau','aam','aan','aang','aap','aat','aak','ai','au','am','an','ang','ap','at','ak',
    'e','ei','eng','ek','i','iu','im','in','ing','ip','it','ik','oh','oi','o' ,'on','ong','ot','ok',
    'oo','ooi','oon','ung','oot','uk','euh','eung','euk','ui', 'un' ,'ut' ,'ue','uen','uet','m','ng']  //slau
  ];
  function parse_generic (s, index) {
    var parts = ['', '', ''];
    var offset = 0;
    // find onset
    var max = 0;
    var maxid = -1;
    for (var i = 0; i < onsets[index].length; i++) {
      if (s.indexOf(onsets[index][i]) === 0 && onsets[index][i].length > max) {
        max = onsets[index][i].length;
        maxid = i;
      }
    }
    if (maxid >= 0) {
      parts[0] = onsets[index][maxid];
      offset += onsets[index][maxid].length;
    }
    // find final
    max = 0;
    maxid = -1;
    for (var i = 0; i < finals[index].length; i++) {
      if (s.indexOf(finals[index][i]) === offset && finals[index][i].length > max) {
        max = finals[index][i].length;
        maxid = i;
      }
    }
    if (maxid >= 0) {
      parts[1] = finals[index][maxid];
      offset += finals[index][maxid].length;
    }
    // find tone
    if (s.length > offset && /^[0-9]$/.test(s[offset])) {
      parts[2] = s[offset];
    }
    return parts;
  }
  var parse_lshk = function (s) {
    var parts = parse_generic(s, LSHK);
    if (!(/^[1-6]$/.test(parts[2]))) {
      parts[2] = '';
    }
    return parts;
  };
  libcantonese.parse_lshk = parse_lshk;
  var parse_yale = function (s) {
    var parts = parse_generic(s, YALE);
    if (!(/^[1-6]$/.test(parts[2]))) {
      parts[2] = '';
    }
    return parts;
  };
  libcantonese.parse_yale = parse_yale;
  var parse_hked = function (s) {
    var parts = parse_generic(s, HKED);
    if (!(/^[1-9]$/.test(parts[2]))) {
      parts[2] = '';
    }
    return parts;
  };
  libcantonese.parse_hked = parse_hked;
  var parse_slau = function (s) {
    var parts = parse_generic(s, SLAU);
    if (!(/^[1-6]$/.test(parts[2]))) {
      parts[2] = '';
    }
    return parts;
  };
  libcantonese.parse_slau = parse_slau;
  function convert_generic(s, fidx, tidx) {
    var parts = parse_generic(s, fidx);
    for (var i = 0; i < onsets[fidx].length; i++) {
      if (parts[0] === onsets[fidx][i]) {
        parts[0] = onsets[tidx][i];
        break;
      }
    }
    for (var i = 0; i < finals[fidx].length; i++) {
      if (parts[1] === finals[fidx][i]) {
        parts[1] = finals[tidx][i];
        break;
      }
    }
    return parts;
  }
  libcantonese.lshk_to_yale = function (s) {
    var parts = convert_generic(s, LSHK, YALE);
    return parts.join('');
  };
  libcantonese.yale_to_lshk = function (s) {
    var parts = convert_generic(s, YALE, LSHK);
    return parts.join('');
  };
  libcantonese.lshk_to_hked = function (s) {
    var parts = convert_generic(s, LSHK, HKED);
    return parts.join('');
  };
  libcantonese.hked_to_lshk = function (s) {
    var parts = convert_generic(s, HKED, LSHK);
    return parts.join('');
  };
  libcantonese.lshk_to_slau = function (s) {
    var parts = convert_generic(s, LSHK, SLAU);
    return parts.join('');
  };
  libcantonese.slau_to_lshk = function (s) {
    var parts = convert_generic(s, SLAU, LSHK);
    return parts.join('');
  }
}.call(this));
