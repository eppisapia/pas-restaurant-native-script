"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scroll_view_1 = require('ui/scroll-view');
var absolute_layout_1 = require('ui/layouts/absolute-layout');
var view_1 = require('ui/core/view');
var stack_layout_1 = require('ui/layouts/stack-layout');
var color_1 = require('color');
var list_view_1 = require('ui/list-view');
var utilities_1 = require('./utilities');
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        _super.call(this);
        this.dropShadow = false;
    }
    Object.defineProperty(Header.prototype, "dropShadow", {
        get: function () {
            return this._dropShadow;
        },
        set: function (value) {
            this._dropShadow = value;
        },
        enumerable: true,
        configurable: true
    });
    return Header;
}(stack_layout_1.StackLayout));
exports.Header = Header;
var Content = (function (_super) {
    __extends(Content, _super);
    function Content() {
        _super.apply(this, arguments);
    }
    return Content;
}(stack_layout_1.StackLayout));
exports.Content = Content;
var ListViewContent = (function (_super) {
    __extends(ListViewContent, _super);
    function ListViewContent() {
        _super.apply(this, arguments);
    }
    return ListViewContent;
}(list_view_1.ListView));
exports.ListViewContent = ListViewContent;
var CollapsingHeader = (function (_super) {
    __extends(CollapsingHeader, _super);
    function CollapsingHeader() {
        var _this = this;
        _super.call(this);
        this._addChildFromBuilder = function (name, value) {
            if (value instanceof view_1.View) {
                _this._childLayouts.push(value);
            }
        };
        this.constructView();
    }
    Object.defineProperty(CollapsingHeader.prototype, "statusIosBarBackgroundColor", {
        get: function () {
            return this._statusBarBackgroundColor;
        },
        set: function (color) {
            this._statusBarBackgroundColor = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollapsingHeader.prototype, "android", {
        get: function () {
            return;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollapsingHeader.prototype, "ios", {
        get: function () {
            return;
        },
        enumerable: true,
        configurable: true
    });
    CollapsingHeader.prototype.constructView = function () {
        var _this = this;
        this._childLayouts = [];
        var contentView;
        var scrollView = new scroll_view_1.ScrollView();
        var viewsToFade;
        var maxTopViewHeight;
        var controlsToFade;
        var headerView = new stack_layout_1.StackLayout();
        var statusBarBackground = new stack_layout_1.StackLayout();
        var invalidSetup = false;
        this._minimumHeights = utilities_1.CollapsingUtilities.getMinimumHeights();
        if (this.statusIosBarBackgroundColor == null) {
            this.statusIosBarBackgroundColor = '#fff';
        }
        this.verticalAlignment = 'top';
        scrollView.verticalAlignment = 'top';
        headerView.verticalAlignment = 'top';
        this._topOpacity = 1;
        this._loaded = false;
        this.on(absolute_layout_1.AbsoluteLayout.loadedEvent, function (data) {
            if (!_this._loaded) {
                _this._loaded = true;
                var wrapperStackLayout = new stack_layout_1.StackLayout();
                wrapperStackLayout.verticalAlignment = 'top';
                scrollView.width = '100%';
                scrollView.height = '100%';
                wrapperStackLayout.width = '100%';
                _this.addChild(scrollView);
                _this.addChild(headerView);
                _this.addChild(wrapperStackLayout);
                _this.addChild(statusBarBackground);
                statusBarBackground.height = 25;
                statusBarBackground.backgroundColor = new color_1.Color(_this.statusIosBarBackgroundColor);
                statusBarBackground.verticalAlignment = 'top';
                statusBarBackground.width = '100%';
                absolute_layout_1.AbsoluteLayout.setTop(statusBarBackground, -25);
                _this._childLayouts.forEach(function (element) {
                    if (element instanceof Content || element instanceof list_view_1.ListView) {
                        contentView = element;
                    }
                });
                _this._childLayouts.forEach(function (element) {
                    if (element instanceof Header || element.className === 'header-template') {
                        headerView.addChild(element);
                        if (element instanceof Header && element.dropShadow) {
                            headerView.height = element.height;
                            headerView.addChild(utilities_1.CollapsingUtilities.addDropShadow(element.height, element.width));
                        }
                        else {
                            headerView.height = element.height;
                        }
                        element.verticalAlignment = 'top';
                        headerView.width = '100%';
                        element.width = '100%';
                    }
                });
                utilities_1.CollapsingUtilities.validateView(_this, headerView, contentView);
                headerView.marginTop = 0;
                wrapperStackLayout.marginTop = 0;
                if (contentView instanceof Content) {
                    _this.removeChild(wrapperStackLayout);
                    wrapperStackLayout.addChild(contentView);
                    wrapperStackLayout.paddingTop = headerView.height;
                    scrollView.content = wrapperStackLayout;
                    utilities_1.CollapsingUtilities.disableBounce(scrollView);
                    utilities_1.CollapsingUtilities.addScrollEvent(scrollView, headerView);
                }
                else {
                    wrapperStackLayout.height = '100%';
                    wrapperStackLayout.addChild(contentView);
                    contentView.verticalAlignment = 'top';
                    contentView.marginTop = headerView.height;
                    utilities_1.CollapsingUtilities.disableBounce(contentView);
                    utilities_1.CollapsingUtilities.addListScrollEvent(contentView, headerView);
                }
            }
        });
    };
    return CollapsingHeader;
}(absolute_layout_1.AbsoluteLayout));
exports.CollapsingHeader = CollapsingHeader;
//# sourceMappingURL=nativescript-collapsing-header.js.map