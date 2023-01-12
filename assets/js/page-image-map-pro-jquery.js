!function($, window, document, undefined) {
    $(document).ready(function() {
        function playDemoIntro() {
            function highlightShape(i) {
                return shouldAnimate?6==i?($.imageMapProUnhighlightShape("Demo"), void($.imageMapProIsMobile()||$.imageMapProOpenTooltip("Demo", "spot-8364"))): void $.imageMapProHighlightShape("Demo", shapes[i-1]): void 0
            }
            var delay=500, d=1250, n=5, shapes=["poly-5080", "poly-2893", "poly-974", "poly-225", "poly-1879"], shouldAnimate=!0;
            $.imageMapProEventHighlightedShape=function() {
                shouldAnimate=!1
            }
            ;
            for(var i=1;
            n+1>=i;
            i++)setTimeout(highlightShape.bind(null, i), delay+d/n*i)
        }
        function fitHomescreen() {
            var h=$(window).height();
            h<$("#image-map-pro-container").height()+128&&(h=$("#image-map-pro-container").height()+128), $("#home").css( {
                height: h
            }
            )
        }
        $("#image-map-pro-container").imageMapPro( {
            id:4333, editor: {
                previewMode: 1, selected_shape: "spot-8364", tool: "poly"
            }
            , general: {
                name: "Demo", width: 1280, height: 776, responsive: 1, sticky_tooltips: 0, constrain_tooltips: 1, image_url: "img/image-map-pro-jquery/hero_2.jpg", tooltip_animation: "grow", pageload_animation: "none", fullscreen_tooltips: "mobile-only", late_initialization: 0
            }
            , spots:[ {
                id:"spot-8364", type:"spot", x:26, y:19.8, width:44, height:44, actions: {
                    mouseover: "show-tooltip", click: "no-action", link: "#", open_link_in_new_window: 1
                }
                , default_style: {
                    opacity: 1, border_radius: 50, background_color: "#000000", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#000000", fill_opacity: .4, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", use_icon: 1, icon_type: "library", icon_svg_path: "M409.81,160.113C409.79,71.684,338.136,0,249.725,0C161.276,0,89.583,71.684,89.583,160.113     c0,76.325,119.274,280.238,151.955,334.638c1.72,2.882,4.826,4.641,8.178,4.641c3.351,0,6.468-1.759,8.168-4.631     C290.545,440.361,409.81,236.438,409.81,160.113z M249.716,283.999c-68.303,0-123.915-55.573-123.915-123.895     c0-68.313,55.592-123.895,123.915-123.895s123.876,55.582,123.876,123.895S318.029,283.999,249.716,283.999z", icon_svg_viewbox: "0 0 499.392 499.392", icon_fill: "#000000", icon_url: "", icon_is_pin: 1, icon_shadow: 0
                }
                , mouseover_style: {
                    opacity: 1, border_radius: 50, background_color: "#ffffff", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#ffffff", fill_opacity: .4, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", icon_fill: "#ffcd00"
                }
                , tooltip_style: {
                    border_radius: 5, padding: 20, background_color: "#000000", background_opacity: .9, position: "right", width: 300, auto_width: 1
                }
                , tooltip_content: {
                    content_type:"plain-text", plain_text:"Mouseover the building below!", plain_text_color:"#ffffff", squares_json:'{"containers":[{"id":"sq-container-403761","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"}}]}}]}', squares_content: '<div class="squares-container"><div id="sq-element-725001" class="squares-element col-lg-12 " style="margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; "><p id="" style="" class="">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></div><div class="squares-clear"></div></div>'
                }
                , points:[]
            }
            , {
                id:"poly-2893", type:"poly", x:15.75744680851064, y:22.26270172030207, width:22.844376899696048, height:65.97720051389715, actions: {
                    mouseover: "show-tooltip", click: "no-action", link: "#", open_link_in_new_window: 1
                }
                , default_style: {
                    opacity: 1, border_radius: 50, background_color: "#000000", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#ffcd00", fill_opacity: 0, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", use_icon: 0, icon_type: "library", icon_svg_path: "", icon_svg_viewbox: "", icon_fill: "#2196f3", icon_url: "", icon_is_pin: 0, icon_shadow: 0
                }
                , mouseover_style: {
                    opacity: 1, border_radius: 50, background_color: "#ffffff", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#ffcd00", fill_opacity: .5112781954887218, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", icon_fill: "#000000"
                }
                , tooltip_style: {
                    border_radius: 5, padding: 20, background_color: "#000000", background_opacity: .9, position: "right", width: 450, auto_width: 0
                }
                , tooltip_content: {
                    content_type:"content-builder", plain_text:"Lorem Ipsum", plain_text_color:"#ffffff", squares_json:'{"containers":[{"id":"sq-container-359931","settings":{"elements":[{"settings":{"name":"Heading","iconClass":"fa fa-header"},"options":{"heading":{"text":"Content Builder for the Tooltips"}}},{"settings":{"name":"Image","iconClass":"fa fa-camera"},"options":{"layout":{"column_span":{"lg":{"class":"col-lg-6"}}}}},{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"},"options":{"text":{"text":"Image Map Pro 3.0 comes with a fully featured content builder that allows you to add rich content to your tooltips. Images, video, buttons, responsive grid system - it has it all!"},"layout":{"column_span":{"lg":{"class":"col-lg-6"}}}}},{"settings":{"name":"Button","iconClass":"fa fa-link"},"options":{"button":{"text":"Example Button!","display":"block"}}}]}}]}', squares_content: '<div class="squares-container"><div id="sq-element-273621" class="squares-element col-lg-12 " style="margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; "><h3 id="" style="" class="">Content Builder for the Tooltips</h3></div><div id="sq-element-241571" class="squares-element col-lg-6 " style="margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; "><img src="https://webcraftplugins.com/uploads/placeholder_image.png" id="" style="" class=""></div><div id="sq-element-574821" class="squares-element col-lg-6 " style="margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; "><p id="" style="" class="">Image Map Pro 3.0 comes with a fully featured content builder that allows you to add rich content to your tooltips. Images, video, buttons, responsive grid system - it has it all!</p></div><div id="sq-element-33221" class="squares-element col-lg-12 " style="margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; "><div id="" style="" class=""><a href="#" style="display: block; height: 44px; line-height: 44px; background-color: #2196f3; color: #ffffff; border-radius: 10px; padding-left: 20px; padding-right: 20px; "  class="squares-button">Example Button!</a></div></div><div class="squares-clear"></div></div>'
                }
                , points:[ {
                    x: 2.8712844939993056, y: 100
                }
                , {
                    x: 3.536549668697936, y: 95.06062700400813
                }
                , {
                    x: .8754889699034004, y: 95.06062700400813
                }
                , {
                    x: 0, y: 47.12265849973005
                }
                , {
                    x: .7847960076976461, y: 23.53692508155694
                }
                , {
                    x: 3.9088248123944527, y: 17.15586649440026
                }
                , {
                    x: 12.222274912965194, y: 15.76484496015944
                }
                , {
                    x: 15.056281433779493, y: 7.219083609526608
                }
                , {
                    x: 19.502913861465178, y: 6.533930832820084
                }
                , {
                    x: 19.502913861465178, y: 4.254220219285366
                }
                , {
                    x: 26.155565608451525, y: 1.9745096057506475
                }
                , {
                    x: 33.47348253013651, y: .8346542989832882
                }
                , {
                    x: 38.79560392772559, y: .4547025300608352
                }
                , {
                    x: 44.78299050001331, y: 0
                }
                , {
                    x: 52.766172596396935, y: 1.8997588446122655
                }
                , {
                    x: 59.41882434338327, y: .7599035378449062
                }
                , {
                    x: 64.49612815668326, y: 2.2028938646528204
                }
                , {
                    x: 70.93855610846484, y: 3.267998410281798
                }
                , {
                    x: 70.30788472285052, y: 9.951430765378646
                }
                , {
                    x: 85.60898374091914, y: 7.900104410746106
                }
                , {
                    x: 100, y: 12.231141378913366
                }
                , {
                    x: 99.33473482530137, y: 71.50361733081603
                }
                , {
                    x: 94.67787860241093, y: 71.1236655618936
                }
                , {
                    x: 94.67787860241093, y: 73.02342440650584
                }
                , {
                    x: 74.71992336145188, y: 73.02342440650584
                }
                , {
                    x: 74.71992336145188, y: 99.62004823107758
                }
                ], vs:[[210.09118541033433, 684.7416413373859], [212.03647416413372, 659.4528875379939], [204.25531914893617, 659.4528875379939], [201.69531914893616, 414.0186018237082], [203.99012564995655, 293.2636383750531], [213.12503655683665, 260.593698339942], [237.43423174842115, 253.4719035012826], [245.72109422492397, 209.7190516717325], [258.7234042553191, 206.21118541033434], [258.7234042553191, 194.53945288753798], [278.17629179331306, 182.86772036474164], [299.57446808510633, 177.03185410334345], [315.1367781155015, 175.08656534954406], [332.64437689969606, 172.75856534954406], [355.9878419452888, 182.48500911854103], [375.44072948328267, 176.64914285714283], [390.2871732522796, 184.03700911854102], [409.12534954407295, 189.49016413373857], [407.2812158054711, 223.70820668693008], [452.0228571428571, 213.20576291793313], [494.10334346504555, 235.37993920972644], [492.15805471124617, 538.8449848024316], [478.54103343465044, 536.8996960486323], [478.54103343465044, 546.6261398176291], [420.18237082066867, 546.6261398176291], [420.18237082066867, 682.7963525835867]]
            }
            , {
                id:"poly-974", type:"poly", x:41.03343465045592, y:2.50681540438066, width:19.908814589665656, height:84.47967912762823, actions: {
                    mouseover: "no-action", click: "no-action", link: "#", open_link_in_new_window: 1
                }
                , default_style: {
                    opacity: 1, border_radius: 50, background_color: "#000000", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#ffcd00", fill_opacity: 0, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", use_icon: 0, icon_type: "library", icon_svg_path: "", icon_svg_viewbox: "", icon_fill: "#2196f3", icon_url: "", icon_is_pin: 0, icon_shadow: 0
                }
                , mouseover_style: {
                    opacity: 1, border_radius: 50, background_color: "#ffffff", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#ffcd00", fill_opacity: .5112781954887218, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", icon_fill: "#000000"
                }
                , tooltip_style: {
                    border_radius: 5, padding: 20, background_color: "#000000", background_opacity: .9, position: "top", width: 300, auto_width: 1
                }
                , tooltip_content: {
                    content_type:"plain-text", plain_text:"Lorem Ipsum", plain_text_color:"#ffffff", squares_json:'{"containers":[{"id":"sq-container-403761","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"}}]}}]}', squares_content: '<div class="squares-container"><div id="sq-element-725001" class="squares-element col-lg-12 " style="margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; "><p id="" style="" class="">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></div><div class="squares-clear"></div></div>'
                }
                , points:[ {
                    x: 3.0534351145038165, y: 91.98813056379822
                }
                , {
                    x: 0, y: 10.979228486646884
                }
                , {
                    x: 11.450381679389313, y: 7.71513353115727
                }
                , {
                    x: 11.450381679389313, y: 6.528189910979229
                }
                , {
                    x: 3.0534351145038165, y: 3.857566765578635
                }
                , {
                    x: 29.00763358778626, y: 0
                }
                , {
                    x: 55.72519083969466, y: 5.934718100890208
                }
                , {
                    x: 60.30534351145038, y: 5.341246290801187
                }
                , {
                    x: 72.51908396946564, y: 8.605341246290802
                }
                , {
                    x: 73.2824427480916, y: 9.792284866468842
                }
                , {
                    x: 93.12977099236642, y: 14.540059347181009
                }
                , {
                    x: 93.12977099236642, y: 28.18991097922849
                }
                , {
                    x: 100, y: 30.267062314540063
                }
                , {
                    x: 98.47328244274809, y: 100
                }
                , {
                    x: 58.01526717557252, y: 100
                }
                , {
                    x: 57.25190839694656, y: 91.3946587537092
                }
                , {
                    x: 25.190839694656486, y: 91.0979228486647
                }
                , {
                    x: 25.190839694656486, y: 89.31750741839762
                }
                , {
                    x: 10.687022900763358, y: 89.02077151335311
                }
                , {
                    x: 10.687022900763358, y: 90.80118694362018
                }
                ], vs:[[533.0091185410333, 622.4924012158053], [525.2279635258358, 91.4285714285714], [554.4072948328267, 70.0303951367781], [554.4072948328267, 62.24924012158054], [533.0091185410333, 44.741641337386014], [599.1489361702127, 19.45288753799392], [667.2340425531914, 58.358662613981764], [678.9057750759878, 54.46808510638297], [710.030395136778, 75.86626139817629], [711.9756838905774, 83.64741641337383], [762.5531914893617, 114.77203647416411], [762.5531914893617, 204.25531914893614], [780.0607902735562, 217.8723404255319], [776.1702127659574, 675.0151975683889], [673.0699088145896, 675.0151975683889], [671.1246200607902, 618.6018237082064], [589.4224924012158, 616.6565349544071], [589.4224924012158, 604.9848024316108], [552.4620060790272, 603.0395136778113], [552.4620060790272, 614.7112462006078]]
            }
            , {
                id:"poly-225", type:"poly", x:64.74164133738601, y:16.043618588036225, width:18.84498480243161, height:71.4442390248488, actions: {
                    mouseover: "no-action", click: "no-action", link: "#", open_link_in_new_window: 1
                }
                , default_style: {
                    opacity: 1, border_radius: 50, background_color: "#000000", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#ffcd00", fill_opacity: 0, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", use_icon: 0, icon_type: "library", icon_svg_path: "", icon_svg_viewbox: "", icon_fill: "#2196f3", icon_url: "", icon_is_pin: 0, icon_shadow: 0
                }
                , mouseover_style: {
                    opacity: 1, border_radius: 50, background_color: "#ffffff", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#ffcd00", fill_opacity: .5112781954887218, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", icon_fill: "#000000"
                }
                , tooltip_style: {
                    border_radius: 5, padding: 20, background_color: "#000000", background_opacity: .9, position: "top", width: 300, auto_width: 1
                }
                , tooltip_content: {
                    content_type:"plain-text", plain_text:"Lorem Ipsum", plain_text_color:"#ffffff", squares_json:'{"containers":[{"id":"sq-container-403761","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"}}]}}]}', squares_content: '<div class="squares-container"><div id="sq-element-725001" class="squares-element col-lg-12 " style="margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; "><p id="" style="" class="">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></div><div class="squares-clear"></div></div>'
                }
                , points:[ {
                    x: 1.6129032258064515, y: 92.28070175438596
                }
                , {
                    x: 0, y: 25.6140350877193
                }
                , {
                    x: 2.4193548387096775, y: 25.6140350877193
                }
                , {
                    x: 2.4193548387096775, y: 12.982456140350877
                }
                , {
                    x: 15.32258064516129, y: 11.578947368421053
                }
                , {
                    x: 15.32258064516129, y: 5.964912280701754
                }
                , {
                    x: 31.451612903225808, y: 4.912280701754386
                }
                , {
                    x: 30.64516129032258, y: 2.807017543859649
                }
                , {
                    x: 54.03225806451613, y: 1.7543859649122806
                }
                , {
                    x: 54.83870967741935, y: 3.1578947368421053
                }
                , {
                    x: 77.41935483870968, y: 0
                }
                , {
                    x: 91.12903225806451, y: 5.614035087719298
                }
                , {
                    x: 91.93548387096774, y: 21.75438596491228
                }
                , {
                    x: 98.38709677419355, y: 25.6140350877193
                }
                , {
                    x: 100, y: 81.05263157894737
                }
                , {
                    x: 98.38709677419355, y: 89.47368421052632
                }
                , {
                    x: 86.29032258064517, y: 89.47368421052632
                }
                , {
                    x: 85.48387096774194, y: 99.64912280701755
                }
                , {
                    x: 3.225806451612903, y: 100
                }
                ], vs:[[832.5835866261398, 636.1094224924011], [828.693009118541, 266.5045592705167], [834.5288753799392, 266.5045592705167], [834.5288753799392, 196.47416413373858], [865.6534954407294, 188.69300911854103], [865.6534954407294, 157.56838905775075], [904.5592705167173, 151.73252279635258], [902.6139817629179, 140.06079027355622], [959.0273556231002, 134.22492401215806], [960.9726443768997, 142.0060790273556], [1015.4407294832827, 124.4984802431611], [1048.5106382978722, 155.62310030395136], [1050.4559270516718, 245.1063829787234], [1066.018237082067, 266.5045592705167], [1069.9088145896656, 573.8601823708206], [1066.018237082067, 620.547112462006], [1036.838905775076, 620.547112462006], [1034.8936170212764, 676.9604863221883], [836.4741641337386, 678.9057750759878]]
            }
            , {
                id:"poly-1879", type:"poly", x:88.14589665653494, y:53.14448657286999, width:11.854103343465045, height:35.09541566132924, actions: {
                    mouseover: "no-action", click: "no-action", link: "#", open_link_in_new_window: 1
                }
                , default_style: {
                    opacity: 1, border_radius: 50, background_color: "#000000", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#ffcd00", fill_opacity: 0, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", use_icon: 0, icon_type: "library", icon_svg_path: "", icon_svg_viewbox: "", icon_fill: "#2196f3", icon_url: "", icon_is_pin: 0, icon_shadow: 0
                }
                , mouseover_style: {
                    opacity: 1, border_radius: 50, background_color: "#ffffff", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#ffcd00", fill_opacity: .5112781954887218, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", icon_fill: "#000000"
                }
                , tooltip_style: {
                    border_radius: 5, padding: 20, background_color: "#000000", background_opacity: .9, position: "top", width: 300, auto_width: 1
                }
                , tooltip_content: {
                    content_type:"plain-text", plain_text:"Lorem Ipsum", plain_text_color:"#ffffff", squares_json:'{"containers":[{"id":"sq-container-403761","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"}}]}}]}', squares_content: '<div class="squares-container"><div id="sq-element-725001" class="squares-element col-lg-12 " style="margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; "><p id="" style="" class="">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></div><div class="squares-clear"></div></div>'
                }
                , points:[ {
                    x: 5.128205128205128, y: 99.28571428571429
                }
                , {
                    x: 3.8461538461538463, y: 19.28571428571429
                }
                , {
                    x: 0, y: 13.571428571428571
                }
                , {
                    x: 8.974358974358974, y: 13.571428571428571
                }
                , {
                    x: 10.256410256410255, y: 10
                }
                , {
                    x: 14.102564102564102, y: 9.285714285714286
                }
                , {
                    x: 15.384615384615385, y: 5.714285714285714
                }
                , {
                    x: 98.71794871794873, y: 0
                }
                , {
                    x: 100, y: 100
                }
                ], vs:[[1136.0486322188447, 682.7963525835867], [1134.1033434650453, 464.9240121580547], [1128.267477203647, 449.36170212765956], [1141.8844984802429, 449.36170212765956], [1143.8297872340422, 439.6352583586626], [1149.6656534954404, 437.6899696048632], [1151.6109422492398, 427.9635258358662], [1278.0547112462002, 412.4012158054711], [1279.9999999999995, 684.741641337386]]
            }
            , {
                id:"poly-5080", type:"poly", x:3.1914893617021276, y:57.15539121987905, width:12.613981762917934, height:31.08451101432018, actions: {
                    mouseover: "no-action", click: "no-action", link: "#", open_link_in_new_window: 1
                }
                , default_style: {
                    opacity: 1, border_radius: 50, background_color: "#000000", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#ffcd00", fill_opacity: 0, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", use_icon: 0, icon_type: "library", icon_svg_path: "", icon_svg_viewbox: "", icon_fill: "#2196f3", icon_url: "", icon_is_pin: 0, icon_shadow: 0
                }
                , mouseover_style: {
                    opacity: 1, border_radius: 50, background_color: "#ffffff", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#ffcd00", fill_opacity: .5112781954887218, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", icon_fill: "#000000"
                }
                , tooltip_style: {
                    border_radius: 5, padding: 20, background_color: "#000000", background_opacity: .9, position: "top", width: 300, auto_width: 1
                }
                , tooltip_content: {
                    content_type:"plain-text", plain_text:"Lorem Ipsum", plain_text_color:"#ffffff", squares_json:'{"containers":[{"id":"sq-container-403761","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"}}]}}]}', squares_content: '<div class="squares-container"><div id="sq-element-725001" class="squares-element col-lg-12 " style="margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; "><p id="" style="" class="">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></div><div class="squares-clear"></div></div>'
                }
                , points:[ {
                    x: 1.2048192771084338, y: 100
                }
                , {
                    x: 0, y: 92.74193548387096
                }
                , {
                    x: 13.253012048192772, y: 90.32258064516128
                }
                , {
                    x: 14.457831325301203, y: 87.09677419354838
                }
                , {
                    x: 28.915662650602407, y: 87.09677419354838
                }
                , {
                    x: 32.53012048192771, y: 50
                }
                , {
                    x: 38.55421686746988, y: 41.12903225806452
                }
                , {
                    x: 45.78313253012048, y: 41.12903225806452
                }
                , {
                    x: 44.57831325301205, y: 20.967741935483872
                }
                , {
                    x: 66.26506024096386, y: 15.32258064516129
                }
                , {
                    x: 67.46987951807229, y: 2.4193548387096775
                }
                , {
                    x: 83.13253012048193, y: 0
                }
                , {
                    x: 98.79518072289156, y: 4.838709677419355
                }
                , {
                    x: 100, y: 99.19354838709677
                }
                ], vs:[[42.796352583586625, 684.741641337386], [40.85106382978723, 667.2340425531914], [62.24924012158054, 661.3981762917932], [64.19452887537993, 653.6170212765958], [87.53799392097264, 653.6170212765958], [93.37386018237082, 564.1337386018237], [103.10030395136778, 542.7355623100304], [114.77203647416414, 542.7355623100304], [112.82674772036475, 494.10334346504555], [147.8419452887538, 480.48632218844983], [149.7872340425532, 449.36170212765956], [175.07598784194528, 443.5258358662614], [200.3647416413374, 455.1975683890577], [202.31003039513678, 682.7963525835866]]
            }
            , {
                id:"poly-3579", type:"poly", x:33.586626139817625, y:69.9401497822204, width:7.598784194528875, height:18.55043399241688, actions: {
                    mouseover: "no-action", click: "no-action", link: "#", open_link_in_new_window: 1
                }
                , default_style: {
                    opacity: 1, border_radius: 50, background_color: "#000000", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#ffcd00", fill_opacity: 0, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", use_icon: 0, icon_type: "library", icon_svg_path: "", icon_svg_viewbox: "", icon_fill: "#2196f3", icon_url: "", icon_is_pin: 0, icon_shadow: 0
                }
                , mouseover_style: {
                    opacity: 1, border_radius: 50, background_color: "#ffffff", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#ffcd00", fill_opacity: .5112781954887218, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", icon_fill: "#000000"
                }
                , tooltip_style: {
                    border_radius: 5, padding: 20, background_color: "#000000", background_opacity: .9, position: "top", width: 300, auto_width: 1
                }
                , tooltip_content: {
                    content_type:"plain-text", plain_text:"Lorem Ipsum", plain_text_color:"#ffffff", squares_json:'{"containers":[{"id":"sq-container-403761","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"}}]}}]}', squares_content: '<div class="squares-container"><div id="sq-element-725001" class="squares-element col-lg-12 " style="margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; "><p id="" style="" class="">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></div><div class="squares-clear"></div></div>'
                }
                , points:[ {
                    x: 100, y: 0
                }
                , {
                    x: 0, y: 9.45945945945946
                }
                , {
                    x: 4, y: 97.2972972972973
                }
                , {
                    x: 84, y: 100
                }
                , {
                    x: 80, y: 56.75675675675676
                }
                , {
                    x: 100, y: 52.702702702702695
                }
                ], vs:[[527.1732522796352, 542.7355623100303], [429.9088145896656, 556.3525835866261], [433.7993920972644, 682.7963525835866], [511.61094224924005, 686.6869300911853], [507.7203647416413, 624.4376899696048], [527.1732522796352, 618.6018237082067]]
            }
            , {
                id:"poly-919", type:"poly", x:39.66565349544073, y:77.71127753580045, width:12.917933130699089, height:10.277943157960705, actions: {
                    mouseover: "no-action", click: "no-action", link: "#", open_link_in_new_window: 1
                }
                , default_style: {
                    opacity: 1, border_radius: 50, background_color: "#000000", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#ffcd00", fill_opacity: 0, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", use_icon: 0, icon_type: "library", icon_svg_path: "", icon_svg_viewbox: "", icon_fill: "#2196f3", icon_url: "", icon_is_pin: 0, icon_shadow: 0
                }
                , mouseover_style: {
                    opacity: 1, border_radius: 50, background_color: "#ffffff", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#ffcd00", fill_opacity: .5112781954887218, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", icon_fill: "#000000"
                }
                , tooltip_style: {
                    border_radius: 5, padding: 20, background_color: "#000000", background_opacity: .9, position: "top", width: 300, auto_width: 1
                }
                , tooltip_content: {
                    content_type:"plain-text", plain_text:"Lorem Ipsum", plain_text_color:"#ffffff", squares_json:'{"containers":[{"id":"sq-container-403761","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"}}]}}]}', squares_content: '<div class="squares-container"><div id="sq-element-725001" class="squares-element col-lg-12 " style="margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; "><p id="" style="" class="">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></div><div class="squares-clear"></div></div>'
                }
                , points:[ {
                    x: 96.47058823529412, y: 100
                }
                , {
                    x: 100, y: 26.82926829268293
                }
                , {
                    x: 50.588235294117645, y: 17.073170731707318
                }
                , {
                    x: 50.588235294117645, y: 12.195121951219512
                }
                , {
                    x: 44.70588235294118, y: 0
                }
                , {
                    x: 28.235294117647058, y: 0
                }
                , {
                    x: 27.058823529411764, y: 14.634146341463413
                }
                , {
                    x: 0, y: 24.390243902439025
                }
                , {
                    x: 1.1764705882352942, y: 97.5609756097561
                }
                ], vs:[[667.2340425531916, 682.7963525835866], [673.0699088145897, 624.4376899696048], [591.3677811550152, 616.6565349544072], [591.3677811550152, 612.7659574468084], [581.6413373860182, 603.0395136778114], [554.4072948328268, 603.0395136778114], [552.4620060790273, 614.7112462006078], [507.72036474164133, 622.4924012158053], [509.6656534954407, 680.8510638297871]]
            }
            , {
                id:"poly-9983", type:"poly", x:60.334346504559264, y:73.95105442922947, width:4.86322188449848, height:14.038166264531696, actions: {
                    mouseover: "no-action", click: "no-action", link: "#", open_link_in_new_window: 1
                }
                , default_style: {
                    opacity: 1, border_radius: 50, background_color: "#000000", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#ffcd00", fill_opacity: 0, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", use_icon: 0, icon_type: "library", icon_svg_path: "", icon_svg_viewbox: "", icon_fill: "#2196f3", icon_url: "", icon_is_pin: 0, icon_shadow: 0
                }
                , mouseover_style: {
                    opacity: 1, border_radius: 50, background_color: "#ffffff", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#ffcd00", fill_opacity: .5112781954887218, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", icon_fill: "#000000"
                }
                , tooltip_style: {
                    border_radius: 5, padding: 20, background_color: "#000000", background_opacity: .9, position: "top", width: 300, auto_width: 1
                }
                , tooltip_content: {
                    content_type:"plain-text", plain_text:"Lorem Ipsum", plain_text_color:"#ffffff", squares_json:'{"containers":[{"id":"sq-container-403761","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"}}]}}]}', squares_content: '<div class="squares-container"><div id="sq-element-725001" class="squares-element col-lg-12 " style="margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; "><p id="" style="" class="">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></div><div class="squares-clear"></div></div>'
                }
                , points:[ {
                    x: 15.625, y: 0
                }
                , {
                    x: 84.375, y: 0
                }
                , {
                    x: 96.875, y: 10.714285714285714
                }
                , {
                    x: 100, y: 96.42857142857143
                }
                , {
                    x: 0, y: 100
                }
                , {
                    x: 0, y: 16.071428571428573
                }
                ], vs:[[782.0060790273557, 573.8601823708207], [824.8024316109422, 573.8601823708207], [832.5835866261398, 585.531914893617], [834.5288753799392, 678.9057750759879], [772.2796352583587, 682.7963525835867], [772.2796352583587, 591.3677811550152]]
            }
            , {
                id:"poly-9416", type:"poly", x:80.69908814589665, y:74.20173596966752, width:8.054711246200611, height:13.78748472409363, actions: {
                    mouseover: "no-action", click: "no-action", link: "#", open_link_in_new_window: 1
                }
                , default_style: {
                    opacity: 1, border_radius: 50, background_color: "#000000", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#ffcd00", fill_opacity: 0, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", use_icon: 0, icon_type: "library", icon_svg_path: "", icon_svg_viewbox: "", icon_fill: "#2196f3", icon_url: "", icon_is_pin: 0, icon_shadow: 0
                }
                , mouseover_style: {
                    opacity: 1, border_radius: 50, background_color: "#ffffff", background_opacity: .4, border_width: 0, border_style: "solid", border_color: "#ffffff", border_opacity: 1, fill: "#ffcd00", fill_opacity: .5112781954887218, stroke_color: "#ffffff", stroke_opacity: .75, stroke_width: 0, stroke_dasharray: "10 10", stroke_linecap: "round", icon_fill: "#000000"
                }
                , tooltip_style: {
                    border_radius: 5, padding: 20, background_color: "#000000", background_opacity: .9, position: "top", width: 300, auto_width: 1
                }
                , tooltip_content: {
                    content_type:"plain-text", plain_text:"Lorem Ipsum", plain_text_color:"#ffffff", squares_json:'{"containers":[{"id":"sq-container-403761","settings":{"elements":[{"settings":{"name":"Paragraph","iconClass":"fa fa-paragraph"}}]}}]}', squares_content: '<div class="squares-container"><div id="sq-element-725001" class="squares-element col-lg-12 " style="margin-top: 0px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; padding-top: 10px; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; float: left; font-family: sans-serif; font-size: 14px; font-weight: normal; font-style: normal; line-height: 22px; color: #ffffff; text-align: left; text-decoration: none; text-transform: none; background-color: rgba(255, 255, 255, 0); opacity: 1; box-shadow: none; border-width: 0px; border-style: none; border-color: rgba(0, 0, 0, 1); border-radius: 0px; "><p id="" style="" class="">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p></div><div class="squares-clear"></div></div>'
                }
                , points:[ {
                    x: 0, y: 98.18181818181819
                }
                , {
                    x: 0, y: 47.27272727272727
                }
                , {
                    x: 30.188679245282955, y: 41.81818181818181
                }
                , {
                    x: 33.962264150943305, y: .029659090909091627
                }
                , {
                    x: 84.90566037735844, y: 0
                }
                , {
                    x: 98.11320754716974, y: 10.909090909090908
                }
                , {
                    x: 100, y: 100
                }
                ], vs:[[1032.9483282674773, 680.8510638297872], [1032.9483282674773, 626.3829787234042], [1064.0729483282676, 620.547112462006], [1067.9635258358662, 575.8372036474163], [1120.48632218845, 575.80547112462], [1134.1033434650458, 587.4772036474163], [1136.0486322188451, 682.7963525835866]]
            }
            ]
        }
        ), playDemoIntro(), fitHomescreen(), setTimeout(function() {
            $("body").removeClass("unresolved")
        }
        , 50), $(window).on("resize", function() {
            fitHomescreen()
        }
        ), $("#home-arrow-down").addClass("home-arrow-down-animating"), $(window).on("scroll", function() {
            $("#home-arrow-down").removeClass("home-arrow-down-animating"), $("#home-arrow-down").addClass("home-arrow-down-hidden")
        }
        ), $.imageMapProInitialized=function() {
            fitHomescreen()
        }
        ;
        var globalScrollOffset=-100;
        new MagicScroll( {
            scrollRange:[0, 300], domain:[0, 41], loop:!1, onComplete:function() {
                for(var currentIndex=1, i=0;
                8>i;
                i++)setTimeout(function() {
                    $("#features-badge-"+currentIndex).addClass("active"), currentIndex++
                }
                , 75*i)
            }
        }
        ), new MagicScroll( {
            scrollRange:[300, 400], domain:[0, 51], loop:!1, onUpdate:function(v) {
                $("#article-1-line").css( {
                    height: v
                }
                )
            }
            , onComplete:function() {
                $("#article-1-badge").addClass("active"), $("#screenshot-editor-wrap").addClass("presented")
            }
        }
        ), new MagicScroll( {
            scrollRange:[400, 500], loop:!1, onComplete:function() {
                $("#squares-screenshot-1").addClass("presented"), $("#squares-screenshot-1-shadow").addClass("presented"), setTimeout(function() {
                    $("#squares-screenshot-2").addClass("presented"), $("#squares-screenshot-2-shadow").addClass("presented")
                }
                , 330)
            }
        }
        ), new MagicScroll( {
            scrollRange:[500, 600], domain:[0, 51], loop:!1, onUpdate:function(v) {
                $("#article-2-line").css( {
                    height: v
                }
                )
            }
            , onComplete:function() {
                $("#article-2-badge").addClass("active")
            }
        }
        ), new MagicScroll( {
            scrollRange:[600, 700], domain:[0, 51], loop:!1, onUpdate:function(v) {
                $("#article-3-line").css( {
                    height: v
                }
                )
            }
            , onComplete:function() {
                $("#article-3-badge").addClass("active")
            }
        }
        ), new MagicScroll( {
            scrollRange:[700, 800], domain:[0, 51], loop:!1, onUpdate:function(v) {
                $("#article-4-line").css( {
                    height: v
                }
                )
            }
            , onComplete:function() {
                $("#article-4-badge").addClass("active")
            }
        }
        ), new MagicScroll( {
            scrollRange:[800, 900], domain:[0, 51], loop:!1, onUpdate:function(v) {
                $("#article-5-line").css( {
                    height: v
                }
                )
            }
            , onComplete:function() {
                $("#article-5-badge").addClass("active")
            }
        }
        ), new MagicScroll( {
            scrollRange:[900, 1000], domain:[0, 88], loop:!1, onUpdate:function(v) {
                $("#article-6-line").css( {
                    height: v
                }
                )
            }
            , onComplete:function() {
                $("#article-6-badge").addClass("active"), $("#article-6-line-horizontal").css( {
                    width: "200%"
                }
                ), setTimeout(function() {
                    $("#article-7-badge").addClass("active")
                }
                , 150), setTimeout(function() {
                    $("#article-8-badge").addClass("active")
                }
                , 300)
            }
        }
        )
    }
    )
}

(jQuery, window, document);