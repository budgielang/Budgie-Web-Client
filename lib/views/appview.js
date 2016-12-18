var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "react", "mobx-react"], function (require, exports, React, mobx_react_1) {
    "use strict";
    let AppView = class AppView extends React.Component {
        render() {
            return React.createElement("div", null, this.props.app.sourceLines.join("  ...   "));
        }
    };
    AppView = __decorate([
        mobx_react_1.observer
    ], AppView);
    exports.AppView = AppView;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2FwcHZpZXcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBVUEsSUFBYSxPQUFPLEdBQXBCLGFBQXFCLFNBQVEsS0FBSyxDQUFDLFNBQThCO1FBQ3RELE1BQU07WUFDVCxNQUFNLENBQUMsaUNBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBTyxDQUFDO1FBQ3BFLENBQUM7S0FDSixDQUFBO0lBSlksT0FBTztRQURuQixxQkFBUTtPQUNJLE9BQU8sQ0FJbkI7SUFKWSwwQkFBTyIsImZpbGUiOiJ2aWV3cy9hcHB2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IElBcHBTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9hcHBzdGF0ZVwiO1xyXG5cclxuaW50ZXJmYWNlIElBcHBWaWV3UHJvcHMge1xyXG4gICAgYXBwOiBJQXBwU3RhdGU7XHJcbn1cclxuXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgY2xhc3MgQXBwVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJQXBwVmlld1Byb3BzLCB2b2lkPiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gPGRpdj57dGhpcy5wcm9wcy5hcHAuc291cmNlTGluZXMuam9pbihcIiAgLi4uICAgXCIpfTwvZGl2PjtcclxuICAgIH1cclxufVxyXG4iXX0=
