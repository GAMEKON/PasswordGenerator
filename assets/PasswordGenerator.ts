import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;

@ccclass
class PasswordGenerator extends cc.Component
{
    @property(cc.Slider)
    slider: cc.Slider = null;
    @property(cc.Label)
    label: cc.Label = null;
    @property(cc.Toggle)
    arg1Toggle:cc.Toggle = null;
    @property(cc.Toggle)
    arg2Toggle:cc.Toggle = null;
    @property(cc.Toggle)
    arg3Toggle:cc.Toggle = null;
    @property(cc.Toggle)
    arg4Toggle:cc.Toggle = null;
    @property(cc.EditBox)
    editBox: cc.EditBox = null;
    @property(cc.Button)
    button: cc.Button = null;

    min = 4;
    max = 20;

    onLoad()
    {
        this.onSlider();
    }

    onSlider()
    {
        let l = Math.round(this.slider.progress * 16) + 4;
        this.label.string = l + " signs";
        let pw = this.generatePassword(l,this.arg1Toggle.isChecked,this.arg2Toggle.isChecked,this.arg3Toggle.isChecked,this.arg4Toggle.isChecked);
        this.editBox.string = pw;
    }

    onCopyButtonClick()
    {
        let input = this.editBox.string;

        const el = document.createElement('textarea');

        el.value = input;

        // Prevent keyboard from showing on mobile
        el.setAttribute('readonly', '');

        el.style.contain = 'strict';
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        el.style.fontSize = '12pt'; // Prevent zooming on iOS

        const selection = getSelection();
        let originalRange = false;
        if (selection.rangeCount > 0) {
            originalRange = selection.getRangeAt(0);
        }

        document.body.appendChild(el);
        el.select();

        // Explicit selection workaround for iOS
        el.selectionStart = 0;
        el.selectionEnd = input.length;

        let success = false;
        try {
            success = document.execCommand('copy');
        } catch (err) {}

        document.body.removeChild(el);

        if (originalRange) {
            selection.removeAllRanges();
            selection.addRange(originalRange);
        }

        return success;
    }

    generatePassword(length, arg1, arg2, arg3, arg4)
    {
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

        for (let i = 0; i < length; i++)
        {
            let j = parseInt(Math.random() * str.length);
            res = res + str.charAt(j);
        }
        return res;
    }

}