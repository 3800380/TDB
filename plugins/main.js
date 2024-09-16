(function (_0x5e8f41, _0x2e39f6) {
  const _0x495359 = _0x5e8f41();
  while (true) {
    try {
      const _0x4d201e = parseInt(_0x391d(688, 'eKWU')) / 1 * (parseInt(_0x391d(1110, 'EKb0')) / 2) + -parseInt(_0x391d(1078, 'vFN1')) / 3 * (-parseInt(_0x391d(967, 'g[Jx')) / 4) + parseInt(_0x391d(746, 'iKvA')) / 5 + parseInt(_0x391d(517, ')A9C')) / 6 + -parseInt(_0x391d(396, '[RpR')) / 7 + -parseInt(_0x391d(710, 'jKEd')) / 8 + parseInt(_0x391d(836, 'g[Jx')) / 9;
      if (_0x4d201e === _0x2e39f6) {
        break;
      } else {
        _0x495359.push(_0x495359.shift());
      }
    } catch (_0x1cdb2a) {
      _0x495359.push(_0x495359.shift());
    }
  }
})(_0x201d, 618793);
const config = require("../settings");
const {
  cmd,
  commands
} = require("../lib/command");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
const axios = require("axios");
async function logo(_0x402300) {
  try {
    const {
      data: _0x3fc6f3
    } = await axios.post("https://boredhumans.com/apis/boredagi_api.php", "prompt=" + _0x402300.replace(/\s+/g, "%2520") + "&uid=lwle4nyomx5t0w6quo8&sesh_id=6a55e5df-19f2-4043-b295-a8955f9d528c&get_tool=false&tool_num=44", {
      'headers': {
        'User-Agent': "Googlebot-News",
        'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
      }
    });
    const _0x8f4324 = _0x3fc6f3.output.match(/src="([^"]+)"/)[1];
    return _0x8f4324;
  } catch (_0x3a9b10) {
    return _0x3a9b10;
  }
}
function _0x391d(_0x4a51a3, _0x319ab2) {
  const _0x5f10ed = _0x201d();
  _0x391d = function (_0x5008e5, _0x1e6c47) {
    _0x5008e5 = _0x5008e5 - 221;
    let _0x5aa865 = _0x5f10ed[_0x5008e5];
    if (_0x391d.FtnQcF === undefined) {
      var _0x4b313b = function (_0x1242a9) {
        let _0x57f559 = '';
        let _0x5c920e = '';
        let _0x56eb58 = 0;
        let _0x1e3847;
        let _0x57caa4;
        for (let _0x705917 = 0; _0x57caa4 = _0x1242a9.charAt(_0x705917++); ~_0x57caa4 && (_0x1e3847 = _0x56eb58 % 4 ? _0x1e3847 * 64 + _0x57caa4 : _0x57caa4, _0x56eb58++ % 4) ? _0x57f559 += String.fromCharCode(255 & _0x1e3847 >> (-2 * _0x56eb58 & 6)) : 0) {
          _0x57caa4 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x57caa4);
        }
        let _0x5aabe4 = 0;
        for (let _0x281d67 = _0x57f559.length; _0x5aabe4 < _0x281d67; _0x5aabe4++) {
          _0x5c920e += '%' + ('00' + _0x57f559.charCodeAt(_0x5aabe4).toString(16)).slice(-2);
        }
        return decodeURIComponent(_0x5c920e);
      };
      const _0x1d28a6 = function (_0x15fc12, _0x48f334) {
        let _0x429eee = [];
        let _0x468412 = 0;
        let _0x37e518;
        let _0x2a0c82 = '';
        _0x15fc12 = _0x4b313b(_0x15fc12);
        let _0x121214;
        for (_0x121214 = 0; _0x121214 < 256; _0x121214++) {
          _0x429eee[_0x121214] = _0x121214;
        }
        for (_0x121214 = 0; _0x121214 < 256; _0x121214++) {
          _0x468412 = (_0x468412 + _0x429eee[_0x121214] + _0x48f334.charCodeAt(_0x121214 % _0x48f334.length)) % 256;
          _0x37e518 = _0x429eee[_0x121214];
          _0x429eee[_0x121214] = _0x429eee[_0x468412];
          _0x429eee[_0x468412] = _0x37e518;
        }
        _0x121214 = 0;
        _0x468412 = 0;
        for (let _0x3395af = 0; _0x3395af < _0x15fc12.length; _0x3395af++) {
          _0x121214 = (_0x121214 + 1) % 256;
          _0x468412 = (_0x468412 + _0x429eee[_0x121214]) % 256;
          _0x37e518 = _0x429eee[_0x121214];
          _0x429eee[_0x121214] = _0x429eee[_0x468412];
          _0x429eee[_0x468412] = _0x37e518;
          _0x2a0c82 += String.fromCharCode(_0x15fc12.charCodeAt(_0x3395af) ^ _0x429eee[(_0x429eee[_0x121214] + _0x429eee[_0x468412]) % 256]);
        }
        return _0x2a0c82;
      };
      _0x391d.mTAXmu = _0x1d28a6;
      _0x4a51a3 = arguments;
      _0x391d.FtnQcF = true;
    }
    const _0x1b9f9a = _0x5f10ed[0];
    const _0x3f63a7 = _0x5008e5 + _0x1b9f9a;
    const _0xbf19aa = _0x4a51a3[_0x3f63a7];
    if (!_0xbf19aa) {
      if (_0x391d.RFOWgm === undefined) {
        _0x391d.RFOWgm = true;
      }
      _0x5aa865 = _0x391d.mTAXmu(_0x5aa865, _0x1e6c47);
      _0x4a51a3[_0x3f63a7] = _0x5aa865;
    } else {
      _0x5aa865 = _0xbf19aa;
    }
    return _0x5aa865;
  };
  return _0x391d(_0x4a51a3, _0x319ab2);
}

const _0x2e197e = {};
function _0x201d() {
  const _0x2d6ca9 = ['E8kMCsm0', 'bCkLxmkCW7m', 'W6mFW7FcNSof', 'WRpcNCkTW4Tr', 'W5G5vLOA', 'W4JdUrOQW6a', 'FWBcNHGY', 'W4nlW4a', 'W7RcT8k4WRf4', 'WPzqW4W', 'W4JdHSkVW5hdTa', 'jh3cT0ldGW', 'W5ZcUmofWQzq', 'rmk3zNtcLa', 'cSoIeMrh', 'W4O9WPFcVmkZ', 'WPOod3ddLW', 'ce5+W5xcGq', 'oSkSWQVcS8kE', '4lww4lwP4lsIWPJGTji', 'EmowW4m', 'CwCQ', 'WQRcKeyAzW', 'W6zPxqVdRW', 'W6SUaedcTa', 'emk2rCkbW6u', 'WRBcN0a6W4q', 'W7DqWQJdRL4', '4lE84lsR4lEB4lAA4lAv', 'WQ8/ham', 'W6dcQh1AWQS', 'WP98WQbitG', 'WPtcJ8kWW7jv', 'zSkJWRxcO17dPSkAW4FdMmkuC8oP', 'W404W4S7jG', 'wGFdLa', 'WO3cN8kWWQNcIa', 'rGxdLCo+wa', 'qbpdNG', 'kmoOWQVcV8o2', 'jvm4kq', 'W4RdIMe', 'A8oonZC+', 'dSoduN4h', 'n8opW5/dO8oM', 'wCkHzNpcQG', 'jc9Q', 'F8oMnq', 'WPlcRuX6WPi', 'xuddNW', 'EaBcGG0Z', 'xH/dSubf', 'c19MWO0', 'o8o9W7/cU8o4', 'z8oyExOJ', 'WPZcUhDsW44', 'W77dV8oBW6RdLG', 'W5LYWOaaW4m', '4lEi4lwMAbBGTRW', 'WPXRe389', 'W5tdPmk9tZu', 'x3C9cvC', 'WR/cGtRcQWC', 'WQq0hqxcRG', 'W6qgWQZcMmkf', 'WQqOfG', 'fmogkvTf', 'omomjWhcTa', 'mmo9n8kmDW', 'W78hW6fQaW', 'W5BdG8kgxGi', 'WOe5WPuevG', 'W5mPWP8Mma', 'h0xcTLzs', 'W7yuW6STaW', 'Foc1Roc1S+c1Hoc0NG', 'WRZcOuZcSSo6', 'WQ9CW4ldI3m', 'W4X9W4VcHCk1', 'W6C5tq4', 'W7eAW6L3ba', 'WODlWQHAFW', 'ywhcRCoOla', 'xmoTemofCG', 'WPKSWPuaqa', 'du9ZW4tdNq', 'ACogW4tcHSog', 'WQ/dP8okWR3cQW', 'CmkDW5FcUmoQ', 'WRxcJc/dQaa', 'W7efW6aKaW', 'oCodW43dGqG', 'EmoWmCodlq', 'WOFcNmkMWQBcJG', 'uaLlxSoG', 'Amo6nmoz', 'WOpcGSkW', 'WQGvW6BdRu4', 'WRlcMttcPaK', 'nCkZWQ7cG8kq', 'yui+kCke', 'AtRcGGKN', 'eSoVocu', 'leG1nH4', 'pCkFW7W', 'puuNk8kA', 'ubpdJ8oZEG', 'WQzzW6BdTf8', 'cCk6umksW6u', 'uCoZmSk5rW', 'W40TW4T2', 'avvR', '4lAmWRnzW4K8', 'ys3dRCoUEq', 'hGpdVfDu', 'WORcM8kHWRFcMG', 'mmknCtqI', 'm8kaCsD/', 'fCkubf9M', 'W6qjWRlcTaS', 'W7WtWQZcNmkt', 'E8k6FNpcTW', 'oINcLWzh', 'WO3cJmkrW5iL', 'WQqfrKeF', 'WOmCcrlcOq', '4lEu4lAYW7dGTRhGTja', 'jJLQWQJdLW', 'yCoAWRRcQmoN', 'jCoWoadcTa', 'W7JcTeKDmW', 'W73dJcycW5i', 'WOuUW4O4la', 'W70DW6q+uq', 'W5/GTiZGTQhGT6FGTi0', 'WPFcKCkzWP0X', 'D8oKW6RcNSoK', 'iSoKWR7cVCo0', 'WRFcKKGkpq', 'aCk+xq', 'pmo+W7lcVmo+', 'W5KwW5qpoW', 'W5DrWORcOCkU', 'WO1IhW', 'W6tdJ8oEWOBcGG', 'pSkvCdaJ', 'eCoCj0i', 'W74DWRtcJq', 'WPicWQGXCG', 'FCohW5tdO8oS', 'DsRcKbbD', 'WPVcV28sFW', 'W6RcM0HRWPa', 'rqhdJ8oUCa', 'BSkJq0lcLG', 'WQDsW6VdO1u', 's8oAW5hcQSoR', 'pLlcOG85', 'kSktWQBdLCkK', 'WPBcOdNcVWy', 'WPZcImkfW4jb', 'dmkUq8ktW5m', 'WPtcHCkAW5mR', 'WP8SWOqErW', 'y8kUWRdcRGhcM8kvW4JdJ8kW', 'WO4/lvFdRW', 'F8kVuG', 'fqBdLmoOnq', 'WPHXgtiQ', 'W5yAW54Bjq', 'WRhcQSkEW41F', 'xmowj0rS', 'cmoxux4c', '8k+GOUkaLpgnGiVcR+g0OEg2K+g1Ka', 'WQ3dJrfUW5m', 'n23cO1xdIq', 'W7G0B0yE', 'W6pdS8ooW7dcVG', 'W6SIhMy9', 'WOLVhZ4P', 'WPP4x8kHfa', 'WORcPx0CyG', 'bSkhxbmv', 'WOzsWR1nAq', 'WPnJW6pdVNy', 'W4RcV8ogWPn0', '4lsb4lEO4ls/4lsHgW', 'l8oSWQZcUq', 'Bd58WRhdHa', 'aLiqsCo6', 'B8o0iSodmq', 'WPhcJhWdW4q', 'DCohW4JcQSo7', '4lAX4lwG4lAgfUc2Uq', 'W7VcN11TWOm', 'W7JcSSoHWPH9', 'uSoBkbzQ', 'WOu4W5bRiq', 'lSoQnSkxqq', 'ASoBW5xcUCoQ', 'W4q4W5PRiq', 'W77cVmo2WQr+', 'imkuDYe0', 'WPhcGCkyW5bJ', 'a8knsWW4', 'W59XWPXnW6y', 'W6D4tLib', 'WOxdGdSkW5u', 'W68KrWWk', 'W587WO4Dha', 'lLa+Amkb', 'W6WnW5ephq', 'W5LMWRGNW4m', 'gCo4mG', 'xmkAAvPH', 'WOfUet4Z', 'W4RdGCovW4ldKa', 'oCo3jCkbgG', 'pcJcIXah', 'W6RcM1LKWP0', 'D8kVvLhcLG', 'oLmYnq', 'W68DWRBcNmkt', 'WOPdWRPE', 'WQ7cMtlcPWi', 'WOFcUmk0hZ8', 'CmoSnCo2ka', 'wSohuNSn', 'WP4DaW3cIa', 'W7eyWQO+fW', 'e8ohiXzV', 'wXP+ySoG', 'B0e+z8kp', 'kmo6n8kaqG', 'v0/dNCoVEW', 'WPtcHNpdK8oK', 'f8o+lMBcSG', 'W53dVCk0rdO', 'WPddPgmo', 'W6WwW6qJta', 'DXXjwSo3', 'WQpcLCkKWOtcKa', 'W5xdT3zFWOy', 'WRtcHmk7WOJcRq', 'e8oaiW', 'W5BdPSoCW6W', 'jmoNWQ3cV8o/', 'ke84imkp', 'W7/cJL07', 'WOCAWPGOyW', 'W6DPuKym', 'uGpdUffq', 'W7G/r1yn', 'pmo2kmkqqa', 'lcC2WQ7dLq', 'dCkhWPZcKSkL', 'gGDXW4lcIG', 'pgNcLqTz', 'W6ldOmoyWRZcRG', 'xmoVemogEW', 'g8oyc1X9', 'W4BcOYGaWP5tW4hcI8khlK7dJIu', 'W5DrWPy', 'WPfXw8oQbq', 'WRxcMs/cUb8', 'W4BdOSoXwd4', 'fmoBm1HS', 'ECosfCk6wG', 'm8k/iSkAxa', 'WQbwW6i', 'h8opltdcVW', 'W4mXWOWxha', 'W5VdL8obWOxcHG', 'W7fTWOq1W7a', 'WPlcQmktWOJcOW', 'dmkOt8oru3L4jNpcNq', 'B0CYkCkg', 'WRtcUYVcRay', '4lsQW7dcT8o3ma', 'W4ZdLSomW4mJ', 'm8oFmwbf', '4ls14ls24lARe+c0MW', 'WOT1W5FdN0K', 'h8ovmL57', 'WPG2leddOq', 'W4JdIZizW5i', 'WRXXW5hdSCk1', 'WPLTwq', 'W5uWWPWdW68', 'W6K4DKSL', 'mJFcKvy', 'WRJdPw9KW5e', 'W5DrWPRcOmkZ', 'aSoLjcRcPa', 'Fmo+nmkCzq', 'pSore8kbDW', '4ls84lAE4lEYe+c0Hq', 'lSoEcCkTzG', 'sCoVdmkn', 'aCk+hSkyW6e', 'ldHG', 'W6XnW7tcK8kH', 'kqS9jWq', 'WRDoqCokgW', 'wheW', 'WOvKfZy', 'AauHnq4', 'W6NcNu3dH8ocEdG', 'vgGApN4', 'gmkpqcWl', 'ymowWPy', 'vCo8emkAnG', 'rmohthay', 'qWtdTfvd', 'W6aDWR/cH8kx', 'W7pdM8oJ', 'WP3dOM5dW5u', 'W7WgW6KpmW', 'W5hGT6xGTzFGTR8t', 'WRZcVHW', 'B8k3uKxcHW', 'lmk1W6NdSKm', 'W6PFW6NdKCkq', 'iCoyeJ7cQa', 'WPZcNNBdM8oh', 'zCoNkq', 'eCovmLnV', 'F8kLuKxdKW', 'W74UxXFdTG', 'qqRdRvfs', 'b8kYvSkjzG', 'W5PSWQ1OuSkgW5q', 'aCkNDXWb', 'vwxcRmo+ka', 'W5NdHCoE', 'W7/dJtuGW5a', 'WPRcHCkeW5rS', 'lSktWQNcLSkG', 'EmkWW6FdQmkK', 'WPaTWOyxvG', 'vGhdJ8o/CG', 'WRNcNNVcVam', 'W5vmW4ZcVSkO', 'deHQWPdcJG', 'A8oOWRBdUSkW', 'WP3dS2HqW4C', 'vWLxs8oH', 'nmkcWRZcHCkN', 'WOLUeW', 'W7hdHSo9W5W', 'WOm9WOatrW', 'omkmEti0', 'avn6W5xcNq', 'fH5xt8oN', 'W7/cKqKOWPm', 'W6mFWRNcHSoA', 'YPVlMog3OvdHTl4', 'jCoVWRi', 'uGxdJ8ofyq', 'cCkyWQNcL8k4', 'W43dHSoMW7pdNW', 'pLZdMreP', 'jhZcT1xdKG', 'WPK9WPmtuG', 'WR/cGIm', 'nMhcV0VcHG', 'WQG7gWNcRW', 'WO9kWQbCAq', 'WPXSWPqgWQS', 'FCosm8oykq', 'W4KPW5eOoG', 'weBcJG', 'xbHnamoW', 'W51AW4RcQCoM', 'WOVcMCkWWQNdIq', '4lw14ls/4lEK4lA24lEx', 'bJz/qghdVq7cMWxdGq', 'W5uiW606aq', 'bsyadIq', 'tSo4cSkasq', 'nY96WQhcNW', 'W5RdUCkLwIG', 'veVdVeTd', 'EYdcLrDe', 'WOSgWR5sAa', 'DmodW5lcPCo8', 'WPtcLmkaWP4', 'W6NdJrnnkSopWRL2WPpdMSo4xa', 'WRr5dfSm', 'WRVcIdNcRf0', 'fGpcVbbV', 'WP18wCoQea', 't8o8f8kmEq', 'mc9RWQRdNW', 'peu5i8kU', 'WR3cLfmCya', 'WOm7WOazhq', 'oqRcIcfH', 'i8o+W67cTHW', 'oSkAWQFcMSkM', 'fCoRpYpcNa', 'jSo+W6hdPa8', 'ibmGnGq', 'WQ4kb1ldUG', 'vq7dQWTu', 'jSoOWRJcV8oI', 'Dq94jSkt', 'WOu/W5OQjW', 'iCodf2nI', '4lAe4lst4lwKW7RGTkK', 'WPWYjHpdOq', 'lrv04lEx4lET', 'rSoqz0ev', 'W6e4uvyh', 'emkzxJm2', 'WPqQW4WkrG', 'W47dGtWFWOW', 'W44AWRLpDq', 'W4/dH8oxW4hdGW', 'W5NdHIaEW40', 'W5ZcMCotWRjd', 'W5LSW5hGT7pGTj0', 'kYFcULBdIq', 'zHVcNHWU', 'cCo3uSkDW6e', 'WOTVqq', 'vW1AqmoY', 'W7VcLKH8WOm', 'W6S8abldOa', 'W5fzW5ZcPCo2', 'yHRdT8oODG', 'W7GxWRVcGmoz', 'lmo5WQVdQa', 'gSkREYuY', 'B1JcG8onda', 'iSkWArCy', 'WR3cHWOdzG', 'W7tcQSo/WRnO', 'aIbFWRddKG', 'WORcOCkHWPtcNG', 'W6D4wLih', 'W6SPaaZcTG', 'q8oNgSoHkG', 'k24am8k6', 'W5ZdOmoeWOJcGa', 'WP9tWQzjFW', 'W4TSW5mQiq', 'W6iJW5aSoq', 'nb/cVrrt', 'W5iSwt4Q', 'WPniW57dTvO', 'W5NcT3zlWQW', 'WQJcNJ7cUH8', 'n8kuDdLX', 'dmo0W7xcTG0', 'xHrts8o9', 'g8kAfYjEWPhcJIHIW43cVCku', 'sLhcJ8ohcq', 'ctmwcsm', 'omoSWRhcVSoC', 'W5T3WPCB', 'xehcJCkwqq', 'WOvBpJK4', 'WPZcPeGFEG', 'W4VcMSoMWRjp', '4lwH4lAdWP8Pna', 'CCkWtG', 'WRZcGtlcQr8', 'FXFcIqzi', 'WR4OaW', 'WOvQeJu', 'a8knEmk0W4e', 'W4yJiI0J', 'W7ebW60Vea', 'W71wWR00W7y', 'W4VcL8oIWRPk', 'W67dQCocWQ7cVa', 'WOZcHvJdTmo+', 'WOHkW6ddTxe', 'imkuFsCO', 'W7tdI8oGWPxcQa', 'r8omaNqe', 'oCo+mmkCqq', 'W7HRv1ldSalcRCkIW4ldG8ovW7Hf', 'ECoWpSoefa', 'd05rW5FcHa', 'W5ddRmkJtG', 'lSkvWQNcNmo6', 'W4O+W4y', 'wahdLCo+', 'jhJdR1tcMW', 'aSolbH7cSW', 'WOTXdCoIfG', 'WRNdG1v1W60', 'W6TOW6ldTe0', 'wHtdLmo2Ca', 'W7FcKfTTWOO', 'kmkoBxu1', 'W7pcU8oLWRv7', 'mCkxWRZcLSk8', 'WPfOwCo/aG', 'aCoal1LM', 'W6G5vL0n', 'W4BcPCoiWQ7cOq', 'WP5sW6LjDq', 'xqPWWOldLG', 'rwyOgLa', 'W4pdHNmmW4G', 'WOJcKCkBW5rG', 'WRTqfqur', 'mSoRW7tcTGq', 'w8o2W77cRmo7', 'WQbpW6lcPK8', 'W7SgW7yRbq', 'W6GxWQVcIW', 'WP/cMMfsWPDSg2FdPmk9d38', 'tCo8dCkCCW', 'WPddM8kfW5vG', 'cmkOh8orCG', 'bwCH', '4lwy4lsk4lwxW7BGTQS', 'WOxdPhvfW48', 'FrVcMbrV', 'WPfVva', 'prqX', 'BSoogSkYxq', 'd0P3', 'wXjrwSo2', 'W4jUW6NcHSkP', 'BSkqBtaI', 'iSkoy8kGW40', 'WQbxW67dP0G', 'W7xcICo7W5FcUq', 'tKz1W5hcHG', 'CCk2x1pcGq', 'f8o6oYRcKG', 'W7ZcM1PR', 'WP1lE8oDdW', 'WQuQF1ddVa', 'jgtcUutdLq', 'jMPTWQBcKa', '4lAV4lwTWOBGTAlGTzy', 'aCk6va', 'nmo3W7pdS0O', 'W5njWRmkW70', 'kNRcTuhdHW', 'rWpdMSoZoW', 'yqaokmkw', 'x1hcG8oneW', 'WONcHCkaW5rG', 'pGSWmse', 'WOCiWQrCCG', 'o0GYz8ke', '4lwN4lwH4lET4lwg4ls3', '4lE64lwbWQdGTzxGT58', 'WRDcpW', 'g1r3', 'ubJdSSoFuq', 'WOJcLCk3WQ3cIa', 'WPJcKmkrWObS', 'omoWl8kqrG', 'WQ/cIcVcPbu', 'W6lcHSoUW4JdSa', 'o8ogaSkSqW', 'md7dMa', 'saFdRf0', 'umo/iIldHG', 'n8kiDda/', 'WR7cNeSCFq', 'u2y6gG', 'pSomeSk7Aq', 'gCk4CYud', 'iw3cO0y', 'WQqBW7pdQrS', 'W6ldMGGrDG', 'vmoRhmoiEW', 'g8kvWPNcSmkn', 'W5FcPMHjWRi', 'W4xcGZ8kW5u', 'W6TvW7u4dq', 'sColea', 'WQ/cSLNdVSoZ', 'WRJcJLTNWOK', 'vSoZe8kAta', 'WPdcJmk0WQ7dLG', 'WP8QCvtdPW', 'W58KW6KMmW', 'nmktns8K', 'W6JcPCoQWOy', 'WOxdGt8kW4i', 'sH5Er8k9', 'AmoAfCkfxG', 'WPtdJtJcQqi', 'chDJW6lcLG', 'CCkqBtaI', 'WPZcJxaqzq', 'W67dTCkuWR7dSG', 'WPzzW4lcSmkV', 'a8ojnCkJsG', 'ErvNF8kormoQaCoQWPO', 'WPmVjWFcGq', 'kCoGWRhcVCo4', 'b8obmZxcOG', 'pqhcQtPW', 'm8kKzCkqASkWW5yKWPlcKCkSWPG', 'bCkKqSkuW6C', 'W6W4WP84ma', 'fSosiWq5', 'eSkYumkwW7q', 'kSoXWRBcTCoI', 'WRpcHmoUWOdcOa', 'ESoNp8onkq', 'CSk0uGNcGG', 'c8kOh8oEDW', 'WRZcVGBdV8oR', 'kJLyWRVdGG', 'lmoSWRhcV8oJ', 'W7RcSSoKWRK6', 'uGtdT1fs', 'C8kRwv/dNa', 'zSo0m8oloW', 'W4ddQmkHrIi', 'WPpcL8kBW44', 'tCoqddzg', 'xmo4o8oAia', 'tmomW4FcR8oJ', 'c8kusrC2', 'mI5AxmoL', 'jmoAespcIG', 'lr8DaZm', 'DmokW5pcLmol', 'WPruW4BdO1q', 'rmomAuy9', '4lw/W5vfgge', 'WQpdVxDbW4e', 'WRizlJJcHq', 'W5xdVCkL', 'oNJcPHeL', 'bCoJWO/cLCoF', 'oCoMWRlcQSoL', 'WOLpWPzCAG', 'W603u0Ca', 'tq5A', 'CCodW5ldRCoJ', '4ls14lwxWOxdR+c1UW', 'W6ZdPmoFWQRcQa', 'WPX0q8oOwG', 'iSkvAJW/', 'ESoxW5ldRCoS', 'W4XAW4RcPCk8', 'cKj2WP4', 'yw3cOCo7eW', 'BSoWiSkooG', 'WRtcGdRcRWK', 'W5zXCfldVG', 'W7KfW7fQcG', 'aLiqt8oJ', 'j0uwnSkx', 'wSohuNSv', 'k3hcV0JdNG', 'tCoqaNzm', 'nYBcJbeh', 'pa47kfK', 'xrZdTuad', 'jgxcTq', '4lwk4lAea+c3Soc2Sa', 'AColW5xdOSoT', 'FSo9i8kakG', 'eGSIkay', 'W4CJW5SY', 'WRe4abtcUG', 'WOFdJ8kHWQJdIq', 'a19yW6RcHW', 'WO3cGSo6WRhdMG', 'WOZcJmkBW6DF', 'WPj9WPKdW7m', 'W7WZueyf', 'gmkQjYFcJW', 'kmkdWRRcL8k7', '4lE64lwp4lsX4lwCta', 'W63dPmocWR3dOq', 'wCo8dCkj', 'sCoos3yF', 'FNZcMSozcq', 'W7T3WRqTW6a', 'WP4SWOKvqq', 'e8oTdSk0xq', 'W5jDW5FdV8kL', 'iNJcPaxdJG', 'tmoWW7hcNCoE', 'WQainZxcTW', 'hSoVAYhcKG', 'bSorjv4N', 'teBcGCogrW', 'W4JdPSo6WORcLG', 'WP1sWQbsDa', 'zSohr3nm', 'mSkjodO/', 'W6CCWRlcMSkS', 'BCkcW4xcV8oQ', 'WPXPWPKdW7m', 'WOb3aI8P', 'W6hdU8odW5ldQq', 'xa17xSoq', 'W4a+WPiXia', 'W6ZdSmoeWOpcGW', 'FCkNrN/cOq', 'fCoIkJlcNa', 'eIehiti', 'tCkcvN8j', 'rwy6deG', 'zSonaN4b', 'W5vOWPqmWQC', 'W6qDzwSX', 'W55VWOusuq', 'qb7dVfzd', 'WQbdWR5o', 'WQ40vKaq', 'WOtcHSk5WQlcHW', 'yum/jSkx', 'WO9fySo/pG', 'CSowWPZcH8kT', 'WROVabtcPq', 'eWZcRdPK', 'qmk2wmovW6y', 'WPRdHmkCW4K', 'nmoVW6xcTGu', 'ybpcGGKL', 'WO9ZaN8Y', 'mmktWQBcKSkG', 'xq8Fr8oG', 'W6tdR8o5W7RdRW', 'W7dcSL5DWOu', 'ESodW5lcQmoO', 'WP47o1VdUW', 'WOW/aqxcSG', 'W6STablcPa', 'W6maW7JcN8kE', 'WPhdHmkBW44L', 'WQNcGmk8WOZcRW', 'W7GaWQ3cJq', 'nCkeFg5X', 'W43dIJ8oW48', 'W7W1qLPh', 'lmkxWRZcGCkX', 'lSo7WRZcU8o4', 'W5nZW54wW7i', 'WO1hWRLjCW', 'WPuKd3ZdNW', '4BAP4BAjW7hHTlhHTzW', 'imowbeXh', 'iWiT', 'W6pdKCogW73dNq', 'oCoNdIZcSW', 'WP1dWQHpEq', 'kCkfWQ0', 'WOOSfta3', 'hEc0H+c3GUc1MEc3Na', 'DSomW5ldRCoN', 'f+c2MEc2HUc3GUc3RG', 'rqpdReDc', 'j8oAj1rK', 'smkBAvD4', 'W5LuW4NcVSk0', 'qW7dQLbB', 'C8kQqM/cTW', 'B0eWjSkk', 'WOfNs2K7', 'WOrPgbac', 'lSoRlCkBsq', 'W4ZdKYChW44', 'WPHSbsS', 'kMxdV0ldGW', 'WRZcOaBdS8o6', 'jMFcVLhdGW', 'gCkAfInvWPZcQGT3W4pcRSkR', 'BCkNf1hcMG', 'WO/cJSkYWQlcMG', 'WOLjWQzADG', 'xdJdJv9H', 'm8koFcX9', 'WOHuWQzqvW', 'e8oziW', 'W6FdHmoQ', 'W7ehW7W', 'W5pdVCkHrJi', 'W6BdO8k3ysO', 'xqqcwmo6', '4lws4lES4lAz4lEHrW', 'vgSOdre', 'CGpdQSoFta', 'WOP1xSo8ga', 'W6WqW7y/dG', 'WRGPWOydEq', 'bSk+xCkqW64', 'WQhdQmosW6hcPG', 'W6NdKCkWW4NdRa', 'W50tW7SoiSoKWQiGWQz4duJdVG', 'WOnMdW', 'Ewu2WQhdLq', '4Bwi4BwQDpcUSj/IGQRXJ4g5', 'eCkfWR3cOSkJ', 'W7OKvLy', 'W5hdPCk+qZG', 'pmk1W7NdTWi', 'bLnMW4dcNa', 'W7OqW7yP', 'kg3cK3xdJa', 'A8kXuG', 'W4jPW5Lca3ueimkEw8oNW5ZdMG', 'WRZcMxVcSqm', 'W4JdOr4nW4C', 'lK0Y', 'a8kcESkTW48', 'dubtW7ZcNa', 'WQK3d0RdJW', 'WPjkzCokaG', 'mJFcKvC', 'WPiYWQOiEG', 'kmoWkmkq', 'b8ohiW', 'WODqWO1Tva', 'W47dNmoHW7ZdLG', 'WPldS3rwW5q', 'qez7W4dcHG', 'WRnAW7pdOXS', 'W7fBW7tcLmkF', 'Ab47m1C', 'WOVcVmkVWR7cRG', 'uSoVaa', 'W70DW6aVea', 'iMPYWQZdIq', '4lwS4lsN4lEQW6Hn', 'gq3dKmkxuqzunaVcVHz4', 'wmoqtxOC', 'WRK+tYhcIq', 'WQHxW67dTru', 'W5pdUCk5wxS', 'd05IW5NcJa', 'WP1WeW', 'zEc2Soc1VqxGTAu', 'yHFdLHXG', 'wxeml10', 'W603v1yo', 'AY3dIKjY', 'WPPUwYOO', 'WQvwW4ldONK', 'l8oSiq', 'W5FcMNbUWQa', 'EmopW4m', 'WPHVqSoIoG', 'C8kJufpcGa', 'eqBdVavw', 'W6OZufa', 'WR5kWQXCAq', 'oCoRWRddTCo5', 'W6nwW4tcS8kQ', 'mmk6F8oipa', 'iIn1WQBdLW', 'WQhcPeOSCG', 'W57dKCojWQtcOG', 'WPlcUJtcQI8', 'WPO8W40Koa', 'WOPSeIy', 'jCkiDZTS', 'WPO9BmogvW', 'WR3cHWCqya', '4Bwqz8M8Y6Wj', 'W68tWQZcJCkr', 'WRK/dGpcTa', 'WPeVpIlcPW', 'WPZdHmkaW48L', 'WR7cJcVcVau', '4lwe4lAR4lEP4lwB4lEk', 'FL3cJLa3', 'WO3cImk6', 'h8ornuvP', 'wmoVv8oj', 'xmo6hmkBnG', 'WQ/cNJ/cSIC', 'x08+leu', 'vbldN8kLyq', 'AMNcUqRdHa', 'm8oZaW', 'WRJcPqFcSW', 'WRldTuT2W78', 'm8kcWQdcKmkM', 'vG7dT0bf', 'WQJdImoMW5tdTG', 'q8ohwW'];
  _0x201d = function () {
    return _0x2d6ca9;
  };
  return _0x201d();
}

  ///////////////////////////////
  const DeployBot = {
    'pattern': "deploy",
    'react': '💫',
    'filename': __filename
  };
  
  const fetch = require('node-fetch');
  cmd(DeployBot, async (_0xe0d887, _0x2bbfc0, _0x5b2efc, {
    from: _0x3e7b20,
    l: _0x447ea9,
    prefix: _0x4be581,
    quoted: _0x308131,
    body: _0x3a6c50,
    isCmd: _0x282b69,
    command: _0x2b9288,
    args: _0x5be5f4,
    q: userMsg,
    isGroup: _0x21f09e,
    sender: _0x4815f1,
    senderNumber: _0x76d1bf,
    botNumber2: _0x43a7c6,
    botNumber: _0x4ec681,
    pushname: SenderName,
    isMe: _0x1a6f96,
    isOwner: _0x4a389b,
    groupMetadata: _0xc3f48a,
    groupName: _0x11681f,
    participants: _0x1dda22,
    groupAdmins: _0x1e7c00,
    isBotAdmins: _0x4bfd22,
    isAdmins: _0x5bb9bb,
    reply: MsgReply
  }) => {
  
    // Check if userMsg contains 'Byte;;;ey'
    if (!userMsg.includes("Byte;;;ey")) {

      console.log("Wrong session ID.");
    await MsgReply("*Wrong session Id*");
     await MsgReply("*Please give me a valid Session ID which starts with Byte;;;*\n> _for example:_\n_.deploy Byte;;; (session ID)_\nOr type `.pairinfo` for more information");
      return; // Stop further execution if condition is not met
    }
  
    // URL of the JSON file hosted in your GitHub repository's raw content
    const API_KEYS_URL = 'https://raw.githubusercontent.com/3800380/3800380TDB/main/apis.json';
  
    // GitHub repository details
    const GITHUB_REPO = 'HyHamza/X-BYTE';  // GitHub repo in format 'username/repo'
  
    // Function to fetch the API keys from the JSON file
    async function fetchApiKeys() {
      try {
        const response = await fetch(API_KEYS_URL);
        if (!response.ok) {
          throw new Error(`Failed to fetch API keys: ${response.statusText}`);
        }
        const data = await response.json();
        return data.apiKeys;
      } catch (error) {
        console.error(error);
        return [];
      }
    }
  
    // Function to set custom config variables like HEROKU_APP_NAME and HEROKU_API_KEY
    async function setConfigVars(appId, appName, apiKey) {
      const configVars = {
        HEROKU_APP_NAME: appName,
        HEROKU_API_KEY: apiKey,
        SESSION_ID: userMsg,
        COMMAND_TYPE: "button",
        POSTGRESQL_URL: "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
        OWNER_NUMBER: _0x76d1bf,
        ANTI_DELETE: "true",
        WORK_TYPE: "public",
        BOT_EXPIRY_DATE: "2029-09-05",
        BOT_EXPIRY_TIME: "16:00:00"
      };
  
      const response = await fetch(`https://api.heroku.com/apps/${appId}/config-vars`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'application/vnd.heroku+json; version=3'
        },
        body: JSON.stringify(configVars)
      });
  
      if (!response.ok) {
        throw new Error(`Failed to set config vars: ${response.statusText}`);
      }
  
      const configData = await response.json();
      console.log('Config Vars Set:', configData);
    }
  
    // Function to check if an app name is already taken
    async function isAppNameTaken(appName, apiKey) {
      const response = await fetch(`https://api.heroku.com/apps/${appName}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'application/vnd.heroku+json; version=3'
        }
      });
  
      if (response.status === 404) {
        // App name is available
        return false;
      }
  
      if (response.ok) {
        // App name is taken
        return true;
      }
  
      throw new Error(`Failed to check app name: ${response.statusText}`);
    }
  
    // Function to create a new Heroku app with the provided API key and GitHub repo deployment
    async function createHerokuApp(apiKey) {
      const appName = String("freex" + _0x76d1bf);  // App name based on sender's number
  
      // Check if the app name is taken
      const nameTaken = await isAppNameTaken(appName, apiKey);
  
      if (nameTaken) {
       await MsgReply("Sorry, you cannot get another bot, please try again later..")
        console.log(`The app name "${appName}" is already taken. Stopping the process.`);
        return;
      }
  
      const response = await fetch('https://api.heroku.com/apps', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'application/vnd.heroku+json; version=3'
        },
        body: JSON.stringify({
          name: appName
        })
      });
  
      if (!response.ok) {
        throw new Error(`Failed to create Heroku app with API key: ${response.statusText}`);
      }
  
      const appData = await response.json();
  
      // Set custom config vars after app creation
      await setConfigVars(appData.id, appName, apiKey);
  
      // Link the GitHub repo to Heroku app
      await linkGitHubRepoToHeroku(appData.id, apiKey);
  
      return appData;
    }
  
    // Function to link the GitHub repo to Heroku app
    async function linkGitHubRepoToHeroku(appId, apiKey) {
      const response = await fetch(`https://api.heroku.com/apps/${appId}/builds`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'application/vnd.heroku+json; version=3'
        },
        body: JSON.stringify({
          source_blob: {
            url: `https://github.com/${GITHUB_REPO}/tarball/main`  // Downloading the repo's tarball
          }
        })
      });
  
      if (!response.ok) {
        throw new Error(`Failed to link GitHub repo to Heroku app: ${response.statusText}`);
      }
  
      const buildData = await response.json();
      console.log('GitHub Repo Linked:', buildData);
    }
  
    // Function to deploy app using multiple API keys
    async function deployWithMultipleKeys() {
      const apiKeys = await fetchApiKeys();
  
      if (apiKeys.length === 0) {
        console.log('No API keys found. Please check the JSON file URL.');
        return;
      }
  
      for (const apiKey of apiKeys) {
        try {
          console.log(`Attempting to deploy with API key: ${apiKey}`);
          
          const appData = await createHerokuApp(apiKey);
          if (!appData) {
            // If app creation failed due to a name clash, stop further attempts.
            return;
          }
          MsgReply("Your Bot is deployed, wait for some time to be activated...");
          console.log(`App deployed successfully with API key: ${apiKey}`);
          console.log('App Name:', appData.name);
          console.log('App details:', appData);
          break;  // Exit the loop if deployment is successful
        } catch (error) {
          console.error(`Error with API key: ${apiKey} - ${error.message}`);
          continue;  // Try the next API key
        }
      }
    }
  
    // Start the deployment process
    deployWithMultipleKeys();
  });


  const freebotinfo = {
    'pattern': "freebotmoreinfo",
    'react':'ℹ️',
    'alias': ['pairinfo'],
    'filename': __filename
  };

  cmd(freebotinfo, async (_0xe0d887, _0x2bbfc0, _0x5b2efc, {
    from: _0x3e7b20,
    l: _0x447ea9,
    prefix: _0x4be581,
    quoted: _0x308131,
    body: _0x3a6c50,
    isCmd: _0x282b69,
    command: _0x2b9288,
    args: _0x5be5f4,
    q: userMsg,
    isGroup: _0x21f09e,
    sender: _0x4815f1,
    senderNumber: _0x76d1bf,
    botNumber2: _0x43a7c6,
    botNumber: _0x4ec681,
    pushname: SenderName,
    isMe: _0x1a6f96,
    isOwner: _0x4a389b,
    groupMetadata: _0xc3f48a,
    groupName: _0x11681f,
    participants: _0x1dda22,
    groupAdmins: _0x1e7c00,
    isBotAdmins: _0x4bfd22,
    isAdmins: _0x5bb9bb,
    reply: MsgReply
  }) => {
  
    // Check if userMsg contains 'Byte;;;ey'
    if (!userMsg.includes("Byte;;;eyaaaaaaa")) {

      console.log("Okkkkkkkkk.");
    await MsgReply("*Type `.deploy` with your session id*");
    await MsgReply(`*_HOW THIS WORKS:_*


*1. First get session id:*

_Before we move on main step, first learn how to get session id_
_There  are two ways to get session id_
* _By using Website_
* By using *.pair* command_


*✧ By using website:*


Click on https://byte-session.vercel.app
Now click on the button named *PAIR CODE* then enter your number with country code 
for example 92307xxxxxxx
Then click on *OKEY* you'll get a code to pair with your WhatsApp account, copy that code and now come back to your WhatsApp
Click on the *3 dots* top of WhatsApp, then click on *linked devices* then click on *Link a device* (Then Enter your phone password) then in the bottom click on the *Link with phone number instead*
Then paste the copied code here, wait for some time, it will be linked...
If it couldn't linked then try againn the same process...
If it is linked then go back to *Chats* section and open your own number (chat) here youu'll got the session id! 

*✧ By using .pair command:*


First of all come to the TDB chat and type *.pair your number with country code* don't forget to add country code, then bot will send you a code copy it and go back to the home of WhatsApp
Click on the *3 dots* top of WhatsApp, then click on *linked devices* then click on *Link a device* (Then Enter your phone password) then in the bottom click on the *Link with phone number instead*
Then paste the copied code here, wait for some time, it will be linked...
If it couldn't linked then try againn the same process...
If it is linked then go back to *Chats* section and open your own number (chat) here youu'll got the session id



2. *Deploy BOT:*
_When you type *.deploy* then you will have to type command like this:_
_*.deploy* And your session id_
*QNA:*

> For how much time the bot will be running?
_Bot will be running for 3 days..._

> On which platform the bot will be deployed?
_HEROKU_

> Can i deploy multiple bots by giving different or same session id?
_No, You can't deploy multiple bots, you can get one bot on 1 number only, incase if you want another bot by using_ *TDB* _then you'll have to use another number to deploy bot on 1 number_
_What does it mean? it means that if you deploy a bot by using_ *TDB* _then you can't deploy bot from same number, you'll have to come back from another number_

> Can I get another bot after 3 days?
_Yeah, If your bot is stopped working after 3 days, then you can get a new bot by using_ *TDB*`)
      return; // Stop further execution if condition is not met
    }
  })


  //not available


  const notavailable = {
    'pattern': "notavailable",
    'react': '❌',
    'filename': __filename
  };

  cmd(notavailable, async (_0xe0d887, _0x2bbfc0, _0x5b2efc, {
    from: _0x3e7b20,
    l: _0x447ea9,
    prefix: _0x4be581,
    quoted: _0x308131,
    body: _0x3a6c50,
    isCmd: _0x282b69,
    command: _0x2b9288,
    args: _0x5be5f4,
    q: userMsg,
    isGroup: _0x21f09e,
    sender: _0x4815f1,
    senderNumber: _0x76d1bf,
    botNumber2: _0x43a7c6,
    botNumber: _0x4ec681,
    pushname: SenderName,
    isMe: _0x1a6f96,
    isOwner: _0x4a389b,
    groupMetadata: _0xc3f48a,
    groupName: _0x11681f,
    participants: _0x1dda22,
    groupAdmins: _0x1e7c00,
    isBotAdmins: _0x4bfd22,
    isAdmins: _0x5bb9bb,
    reply: MsgReply
  }) => {
  
    if (!userMsg.includes("Byte;;;eyaaaaaaa")) {

      console.log("Okkkkkkkkk.");
    await MsgReply("*Not available*");
    await MsgReply(`This option isn't avaiable right now,
Wait till next update...`)
      return; 
    }
  })