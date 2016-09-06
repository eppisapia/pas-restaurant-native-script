"use strict";
var app = require('application');
var Platform = require('platform');
var scroll_view_1 = require('ui/scroll-view');
var label_1 = require('ui/label');
var list_view_1 = require('ui/list-view');
var stack_layout_1 = require('ui/layouts/stack-layout');
var color_1 = require('color');
var CollapsingUtilities = (function () {
    function CollapsingUtilities() {
    }
    CollapsingUtilities.animateHideHeader = function (headerHidden, headerView, content) {
        if (headerHidden === false) {
            headerView.animate({
                translate: { x: 0, y: (headerView.height * -1) },
                duration: 500,
            });
            if (content instanceof list_view_1.ListView) {
                content.animate({
                    translate: { x: 0, y: (headerView.height * -1) },
                    duration: 500,
                });
            }
            headerHidden = true;
        }
        return headerHidden;
    };
    ;
    CollapsingUtilities.animateShowHeader = function (headerHidden, headerView, content) {
        if (headerHidden === true) {
            headerView.animate({
                translate: { x: 0, y: 0 },
                duration: 400,
            });
            if (content instanceof list_view_1.ListView) {
                content.animate({
                    translate: { x: 0, y: 0 },
                    duration: 400,
                });
            }
            headerHidden = false;
        }
        return headerHidden;
    };
    ;
    CollapsingUtilities.disableBounce = function (view) {
        if (app.ios) {
            view.ios.bounces = false;
        }
        else if (app.android && view.android != null) {
            view.android.setOverScrollMode(2);
        }
    };
    CollapsingUtilities.validateView = function (parent, headerView, contentView) {
        if (headerView == null || contentView == null) {
            this.displayDevWarning(parent, 'ScrollView Setup Invalid. You must have Header and Content tags', headerView, contentView, contentView);
            return;
        }
        if (isNaN(headerView.height)) {
            this.displayDevWarning(parent, 'Header MUST have a height set.', headerView, contentView);
            return;
        }
    };
    CollapsingUtilities.addListScrollEvent = function (listView, headerView) {
        var headerHidden = false;
        var animateHideHeader = this.animateHideHeader;
        var animateShowHeader = this.animateShowHeader;
        listView.height = '100%';
        if (app.android) {
            var mLastFirstVisibleItem_1;
            listView.android.setOnScrollListener(new android.widget.AbsListView.OnScrollListener({
                onScrollStateChanged: function (view, scrollState) {
                },
                onScroll: function (view, firstVisibleItem, visibleItemCount, totalItemCount) {
                    if (mLastFirstVisibleItem_1 < firstVisibleItem) {
                        headerHidden = animateHideHeader(headerHidden, headerView, listView);
                    }
                    if (mLastFirstVisibleItem_1 > firstVisibleItem) {
                        headerHidden = animateShowHeader(headerHidden, headerView, listView);
                    }
                    mLastFirstVisibleItem_1 = firstVisibleItem;
                }
            }));
        }
        else if (app.ios) {
            listView.on('pan', function (args) {
                if (args.deltaY < 0) {
                    headerHidden = animateHideHeader(headerHidden, headerView, listView);
                }
                else {
                    headerHidden = animateShowHeader(headerHidden, headerView, listView);
                }
            });
        }
    };
    CollapsingUtilities.addScrollEvent = function (scrollView, headerView) {
        var prevOffset = -10;
        var headerHidden = false;
        var animateHideHeader = this.animateHideHeader;
        var animateShowHeader = this.animateShowHeader;
        var wrapperStackLayout = scrollView.content;
        scrollView.on(scroll_view_1.ScrollView.scrollEvent, function (args) {
            console.log(scrollView.verticalOffset);
            if (prevOffset <= scrollView.verticalOffset) {
                headerHidden = animateHideHeader(headerHidden, headerView, scrollView);
                wrapperStackLayout.paddingTop = 0;
            }
            else {
                headerHidden = animateShowHeader(headerHidden, headerView, scrollView);
                wrapperStackLayout.paddingTop = headerView.height;
            }
            prevOffset = scrollView.verticalOffset;
        });
    };
    CollapsingUtilities.setMinimumHeight = function (contentView, minHeight) {
        contentView.minHeight = minHeight;
    };
    CollapsingUtilities.getMinimumHeights = function () {
        var height1 = Platform.screen.mainScreen.heightDIPs;
        var height2 = Platform.screen.mainScreen.widthDIPs;
        if (height1 > height2) {
            return {
                portrait: height1,
                landscape: height2
            };
        }
        else {
            return {
                portrait: height2,
                landscape: height1
            };
        }
    };
    CollapsingUtilities.addDropShadow = function (marginTop, width) {
        var wrapper = new stack_layout_1.StackLayout();
        wrapper.width = width;
        wrapper.height = 3;
        wrapper.marginTop = marginTop;
        wrapper.addChild(this.shadowView(0.4, width));
        wrapper.addChild(this.shadowView(0.2, width));
        wrapper.addChild(this.shadowView(0.05, width));
        return wrapper;
    };
    CollapsingUtilities.shadowView = function (opacity, width) {
        var shadowRow = new stack_layout_1.StackLayout();
        shadowRow.backgroundColor = new color_1.Color('black');
        shadowRow.opacity = opacity;
        shadowRow.height = 1;
        return shadowRow;
    };
    CollapsingUtilities.displayDevWarning = function (parent, message) {
        var viewsToCollapse = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            viewsToCollapse[_i - 2] = arguments[_i];
        }
        var warningText = new label_1.Label();
        warningText.text = message;
        warningText.color = new color_1.Color('red');
        warningText.textWrap = true;
        warningText.marginTop = 50;
        parent.addChild(warningText);
        viewsToCollapse.forEach(function (view) {
            if (view != null) {
                view.visibility = 'collapse';
            }
        });
    };
    return CollapsingUtilities;
}());
exports.CollapsingUtilities = CollapsingUtilities;
//# sourceMappingURL=utilities.js.map