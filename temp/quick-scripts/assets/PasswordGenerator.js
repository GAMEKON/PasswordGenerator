(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/PasswordGenerator.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '23de6+VmbRGzIjmyMW7/V1q', 'PasswordGenerator', __filename);
// PasswordGenerator.ts

var ccclass = cc._decorator.ccclass;
var property = cc._decorator.property;
var PasswordGenerator = (function (_super) {
    __extends(PasswordGenerator, _super);
    function PasswordGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slider = null;
        _this.label = null;
        _this.arg1Toggle = null;
        _this.arg2Toggle = null;
        _this.arg3Toggle = null;
        _this.arg4Toggle = null;
        _this.editBox = null;
        _this.button = null;
        _this.min = 4;
        _this.max = 20;
        return _this;
    }
    PasswordGenerator.prototype.onLoad = function () {
        this.onSlider();
    };
    PasswordGenerator.prototype.onSlider = function () {
        var l = Math.round(this.slider.progress * 16) + 4;
        this.label.string = l + " signs";
        var pw = this.generatePassword(l, this.arg1Toggle.isChecked, this.arg2Toggle.isChecked, this.arg3Toggle.isChecked, this.arg4Toggle.isChecked);
        this.editBox.string = pw;
    };
    PasswordGenerator.prototype.onCopyButtonClick = function () {
        var input = this.editBox.string;
        var el = document.createElement('textarea');
        el.value = input;
        // Prevent keyboard from showing on mobile
        el.setAttribute('readonly', '');
        el.style.contain = 'strict';
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        el.style.fontSize = '12pt'; // Prevent zooming on iOS
        var selection = getSelection();
        var originalRange = false;
        if (selection.rangeCount > 0) {
            originalRange = selection.getRangeAt(0);
        }
        document.body.appendChild(el);
        el.select();
        // Explicit selection workaround for iOS
        el.selectionStart = 0;
        el.selectionEnd = input.length;
        var success = false;
        try {
            success = document.execCommand('copy');
        }
        catch (err) { }
        document.body.removeChild(el);
        if (originalRange) {
            selection.removeAllRanges();
            selection.addRange(originalRange);
        }
        return success;
    };
    PasswordGenerator.prototype.generatePassword = function (length, arg1, arg2, arg3, arg4) {
        var res = '';
        var str = '';
        var str1 = 'qwertyuioplkjhgfdsazxcvbnm';
        var str2 = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
        var str3 = '1234567890';
        var str4 = '!@#$%^&*.,{}[]/?<>():;';
        if (arg1)
            str = str + str1;
        if (arg2)
            str = str + str2;
        if (arg3)
            str = str + str3;
        if (arg4)
            str = str + str4;
        for (var i = 0; i < length; i++) {
            var j = parseInt(Math.random() * str.length);
            res = res + str.charAt(j);
        }
        return res;
    };
    __decorate([
        property(cc.Slider)
    ], PasswordGenerator.prototype, "slider", void 0);
    __decorate([
        property(cc.Label)
    ], PasswordGenerator.prototype, "label", void 0);
    __decorate([
        property(cc.Toggle)
    ], PasswordGenerator.prototype, "arg1Toggle", void 0);
    __decorate([
        property(cc.Toggle)
    ], PasswordGenerator.prototype, "arg2Toggle", void 0);
    __decorate([
        property(cc.Toggle)
    ], PasswordGenerator.prototype, "arg3Toggle", void 0);
    __decorate([
        property(cc.Toggle)
    ], PasswordGenerator.prototype, "arg4Toggle", void 0);
    __decorate([
        property(cc.EditBox)
    ], PasswordGenerator.prototype, "editBox", void 0);
    __decorate([
        property(cc.Button)
    ], PasswordGenerator.prototype, "button", void 0);
    PasswordGenerator = __decorate([
        ccclass
    ], PasswordGenerator);
    return PasswordGenerator;
}(cc.Component));

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=PasswordGenerator.js.map
        