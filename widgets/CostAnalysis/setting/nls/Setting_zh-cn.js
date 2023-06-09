// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"\u8bbe\u7f6e\u914d\u7f6e\u6587\u672c\uff1a",generalSettings:{tabTitle:"\u5e38\u89c4\u8bbe\u7f6e",measurementUnitLabel:"\u6210\u672c\u5355\u4f4d",currencyLabel:"\u6210\u672c\u7b26\u53f7",roundCostLabel:"\u820d\u5165\u6210\u672c",projectOutputSettings:"\u5de5\u7a0b\u8f93\u51fa\u8bbe\u7f6e",typeOfProjectAreaLabel:"\u5de5\u7a0b\u533a\u57df\u7684\u7c7b\u578b",bufferDistanceLabel:"\u7f13\u51b2\u8ddd\u79bb",csvReportExportLabel:"\u5141\u8bb8\u7528\u6237\u5bfc\u51fa\u5de5\u7a0b\u7684\u62a5\u8868",
editReportSettingsBtnTooltip:"\u7f16\u8f91\u62a5\u8868\u8bbe\u7f6e",roundCostValues:{twoDecimalPoint:"\u4e24\u4e2a\u5c0f\u6570\u70b9",nearestWholeNumber:"\u6700\u8fd1\u4f3c\u7684\u6574\u6570",nearestTen:"\u6700\u8fd1\u4f3c\u7684\u5341\u4f4d",nearestHundred:"\u6700\u8fd1\u4f3c\u7684\u767e\u4f4d",nearestThousand:"\u6700\u8fd1\u4f3c\u7684\u5343\u4f4d",nearestTenThousands:"\u6700\u8fd1\u4f3c\u7684\u4e07\u4f4d"},reportSettings:{reportSettingsPopupTitle:"\u62a5\u8868\u8bbe\u7f6e",reportNameLabel:"\u62a5\u8868\u540d\u79f0(\u53ef\u9009)\uff1a",
checkboxLabel:"\u663e\u793a",layerTitle:"\u6807\u9898",columnLabel:"\u6807\u6ce8",duplicateMsg:"\u540c\u540d\u6807\u6ce8"},projectAreaType:{outline:"\u8f6e\u5ed3",buffer:"\u7f13\u51b2"},errorMessages:{currency:"\u8d27\u5e01\u5355\u4f4d\u65e0\u6548",bufferDistance:"\u7f13\u51b2\u8ddd\u79bb\u65e0\u6548",outOfRangebufferDistance:"\u8be5\u503c\u5e94\u5927\u4e8e 0 \u4e14\u5c0f\u4e8e\u6216\u7b49\u4e8e 100"}},projectSettings:{tabTitle:"\u5de5\u7a0b\u8bbe\u7f6e",costingGeometrySectionTitle:"\u5b9a\u4e49\u6210\u672c\u8ba1\u7b97\u7684\u5730\u7406\u4fe1\u606f(\u53ef\u9009)",
costingGeometrySectionNote:"\u6ce8\u610f\uff1a\u914d\u7f6e\u6b64\u56fe\u5c42\u5c06\u5141\u8bb8\u7528\u6237\u6839\u636e\u5730\u7406\u4fe1\u606f\u8bbe\u7f6e\u8981\u7d20\u6a21\u677f\u7684\u6210\u672c\u65b9\u7a0b\u3002",projectTableSectionTitle:"\u4fdd\u5b58/\u52a0\u8f7d\u5de5\u7a0b\u8bbe\u7f6e\u7684\u529f\u80fd(\u53ef\u9009)",projectTableSectionNote:"\u6ce8\u610f\uff1a\u914d\u7f6e\u6240\u6709\u7684\u8868\u548c\u56fe\u5c42\u5c06\u5141\u8bb8\u7528\u6237\u4fdd\u5b58/\u52a0\u8f7d\u5de5\u7a0b\u4ee5\u5907\u65e5\u540e\u4f7f\u7528\u3002",
costingGeometryLayerLabel:"\u6210\u672c\u8ba1\u7b97\u51e0\u4f55\u56fe\u5c42",fieldLabelGeography:"\u6807\u6ce8\u5730\u7406\u7684\u5b57\u6bb5",projectAssetsTableLabel:"\u5de5\u7a0b\u8d44\u4ea7\u8868",projectMultiplierTableLabel:"\u5de5\u7a0b\u4e58\u6570\u9644\u52a0\u6210\u672c\u8868",projectLayerLabel:"\u5de5\u7a0b\u56fe\u5c42",configureFieldsLabel:"\u914d\u7f6e\u5b57\u6bb5",fieldDescriptionHeaderTitle:"\u5b57\u6bb5\u63cf\u8ff0",layerFieldsHeaderTitle:"\u56fe\u5c42\u5b57\u6bb5",selectLabel:"\u9009\u62e9",
errorMessages:{duplicateLayerSelection:"${layerName} \u5df2\u88ab\u9009\u4e2d",invalidConfiguration:"\u8bf7\u9009\u62e9 ${fieldsString}"},costingGeometryHelp:"\x3cp\x3e\u5c06\u663e\u793a\u7b26\u5408\u4ee5\u4e0b\u6761\u4ef6\u7684\u9762\u56fe\u5c42\uff1a\x3cbr/\x3e \x3cli\x3e \u56fe\u5c42\u5fc5\u987b\u5177\u6709\u201c\u67e5\u8be2\u201d\u529f\u80fd\x3c/li\x3e\x3cli\x3e \u56fe\u5c42\u5fc5\u987b\u5177\u6709\u4e00\u4e2a GlobalID \u5b57\u6bb5\x3c/li\x3e\x3c/p\x3e",fieldToLabelGeographyHelp:"\x3cp\x3e\u9009\u4e2d\u7684\u201c\u6210\u672c\u8ba1\u7b97\u51e0\u4f55\u56fe\u5c42\u201d\u7684\u5b57\u7b26\u4e32\u548c\u6570\u503c\u5b57\u6bb5\u5c06\u5728\u201c\u6807\u6ce8\u5730\u7406\u7684\u5b57\u6bb5\u201d\u4e0b\u62c9\u5217\u8868\u4e2d\u663e\u793a\u3002\x3c/p\x3e",
projectAssetsTableHelp:"\x3cp\x3e\u5c06\u663e\u793a\u7b26\u5408\u4e0b\u5217\u6761\u4ef6\u7684\u8868\u683c\uff1a\x3cbr/\x3e \x3cli\x3e\u8868\u683c\u5fc5\u987b\u5177\u6709\u7f16\u8f91\u529f\u80fd\uff0c\u5373\u201c\u521b\u5efa\u201d\u3001\u201c\u5220\u9664\u201d\u548c\u201c\u66f4\u65b0\u201d\x3c/li\x3e \x3cli\x3e\u8868\u683c\u5fc5\u987b\u5305\u542b\u516d\u4e2a\u5177\u6709\u786e\u5207\u540d\u79f0\u548c\u6570\u636e\u7c7b\u578b\u7684\u5b57\u6bb5\uff1a\x3c/li\x3e\x3cul\x3e\x3cli\x3e AssetGUID (GUID \u7c7b\u578b\u5b57\u6bb5)\x3c/li\x3e\x3cli\x3e CostEquation (\u5b57\u7b26\u4e32\u7c7b\u578b\u5b57\u6bb5)\x3c/li\x3e\x3cli\x3e Scenario (\u5b57\u7b26\u4e32\u7c7b\u578b\u5b57\u6bb5)\x3c/li\x3e\x3cli\x3e TemplateName (\u5b57\u7b26\u4e32\u7c7b\u578b\u5b57\u6bb5)\x3c/li\x3e\x3cli\x3e GeographyGUID (GUID \u7c7b\u578b\u5b57\u6bb5)\x3c/li\x3e\x3cli\x3e ProjectGUID (GUID \u7c7b\u578b\u5b57\u6bb5)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3e\u5c06\u663e\u793a\u7b26\u5408\u4e0b\u5217\u6761\u4ef6\u7684\u8868\u683c\uff1a\x3cbr/\x3e \x3cli\x3e\u8868\u683c\u5fc5\u987b\u5177\u6709\u7f16\u8f91\u529f\u80fd\uff0c\u5373\u201c\u521b\u5efa\u201d\u3001\u201c\u5220\u9664\u201d\u548c\u201c\u66f4\u65b0\u201d\x3c/li\x3e \x3cli\x3e\u8868\u683c\u5fc5\u987b\u5305\u542b\u4e94\u4e2a\u5177\u6709\u786e\u5207\u540d\u79f0\u548c\u6570\u636e\u7c7b\u578b\u7684\u5b57\u6bb5\uff1a\x3c/li\x3e\x3cul\x3e\x3cli\x3e Description (\u5b57\u7b26\u4e32\u7c7b\u578b\u5b57\u6bb5)\x3c/li\x3e\x3cli\x3e Type (\u5b57\u7b26\u4e32\u7c7b\u578b\u5b57\u6bb5)\x3c/li\x3e\x3cli\x3e Value (\u6d6e\u70b9\u578b/\u53cc\u7cbe\u5ea6\u7c7b\u578b\u5b57\u6bb5)\x3c/li\x3e\x3cli\x3e Costindex (\u6574\u578b\u5b57\u6bb5)\x3c/li\x3e\x3cli\x3e ProjectGUID (GUID \u7c7b\u578b\u5b57\u6bb5)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3e\u5c06\u663e\u793a\u7b26\u5408\u4e0b\u5217\u6761\u4ef6\u7684\u9762\u56fe\u5c42\uff1a\x3cbr/\x3e \x3cli\x3e\u56fe\u5c42\u5fc5\u987b\u5177\u6709\u7f16\u8f91\u529f\u80fd\uff0c\u5373\u201c\u521b\u5efa\u201d\u3001\u201c\u5220\u9664\u201d\u548c\u201c\u66f4\u65b0\u201d\x3c/li\x3e \x3cli\x3e\u56fe\u5c42\u5fc5\u987b\u5305\u542b\u4e94\u4e2a\u5177\u6709\u786e\u5207\u540d\u79f0\u548c\u6570\u636e\u7c7b\u578b\u7684\u5b57\u6bb5\uff1a\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (\u5b57\u7b26\u4e32\u578b\u5b57\u6bb5)\x3c/li\x3e\x3cli\x3eDescription (\u5b57\u7b26\u4e32\u578b\u5b57\u6bb5)\x3c/li\x3e\x3cli\x3eTotalassetcost (\u6d6e\u70b9\u578b/\u53cc\u7cbe\u5ea6\u578b\u5b57\u6bb5)\x3c/li\x3e\x3cli\x3eGrossprojectcost (\u6d6e\u70b9\u578b/\u53cc\u7cbe\u5ea6\u578b\u5b57\u6bb5)\x3c/li\x3e\x3cli\x3eGlobalID (GlobalID \u5b57\u6bb5\u7c7b\u578b)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
pointLayerCentroidLabel:"\u70b9\u56fe\u5c42\u8d28\u5fc3",selectRelatedPointLayerDefaultOption:"\u9009\u62e9",pointLayerHintText:"\x3cp\x3e\u5c06\u663e\u793a\u7b26\u5408\u4ee5\u4e0b\u6761\u4ef6\u7684\u70b9\u56fe\u5c42\uff1a\x3cbr/\x3e \x3cli\x3e\t\u56fe\u5c42\u5fc5\u987b\u5177\u6709\u201cProjectid\u201d(GUID \u7c7b\u578b)\u5b57\u6bb5\x3c/li\x3e\x3cli\x3e\t\u56fe\u5c42\u5fc5\u987b\u5177\u6709\u7f16\u8f91\u529f\u80fd\uff0c\u5373\u201c\u521b\u5efa\u201d\u3001\u201c\u5220\u9664\u201d\u548c\u201c\u66f4\u65b0\u201d\x3c/li\x3e\x3c/p\x3e"},
layerSettings:{tabTitle:"\u56fe\u5c42\u8bbe\u7f6e",layerNameHeaderTitle:"\u56fe\u5c42\u540d\u79f0",layerNameHeaderTooltip:"\u5730\u56fe\u4e2d\u7684\u56fe\u5c42\u5217\u8868",EditableLayerHeaderTitle:"\u53ef\u7f16\u8f91",EditableLayerHeaderTooltip:"\u5728\u6210\u672c\u8ba1\u7b97\u5fae\u4ef6\u4e2d\u5305\u542b\u56fe\u5c42\u53ca\u5176\u6a21\u677f",SelectableLayerHeaderTitle:"\u53ef\u9009",SelectableLayerHeaderTooltip:"\u8981\u7d20\u4e2d\u7684\u51e0\u4f55\u53ef\u7528\u4e8e\u751f\u6210\u65b0\u7684\u6210\u672c\u9879\u76ee",
fieldPickerHeaderTitle:"\u5de5\u7a0b ID (\u53ef\u9009)",fieldPickerHeaderTooltip:"\u7528\u4e8e\u5b58\u50a8\u5de5\u7a0b ID \u7684\u53ef\u9009\u5b57\u6bb5(\u5b57\u7b26\u4e32\u578b)",selectLabel:"\u9009\u62e9",noAssetLayersAvailable:"\u5728\u6240\u9009 webmap \u4e2d\u672a\u627e\u5230\u8d44\u4ea7\u56fe\u5c42",disableEditableCheckboxTooltip:"\u8be5\u56fe\u5c42\u6ca1\u6709\u7f16\u8f91\u529f\u80fd",missingCapabilitiesMsg:"\u6b64\u56fe\u5c42\u7f3a\u5c11\u4ee5\u4e0b\u529f\u80fd\uff1a",missingGlobalIdMsg:"\u6b64\u56fe\u5c42\u6ca1\u6709\u5168\u5c40 ID \u5b57\u6bb5",
create:"\u521b\u5efa",update:"\u66f4\u65b0",deleteColumnLabel:"\u5220\u9664",attributeSettingHeaderTitle:"\u5c5e\u6027\u8bbe\u7f6e",addFieldLabelTitle:"\u6dfb\u52a0\u5c5e\u6027",layerAttributesHeaderTitle:"\u56fe\u5c42\u5c5e\u6027",projectLayerAttributesHeaderTitle:"\u5de5\u7a0b\u56fe\u5c42\u5c5e\u6027",attributeSettingsPopupTitle:"\u56fe\u5c42\u5c5e\u6027\u8bbe\u7f6e"},costingInfo:{tabTitle:"\u6210\u672c\u8ba1\u7b97\u4fe1\u606f",proposedMainsLabel:"\u5efa\u8bae\u7684\u4e3b\u7ebf",addCostingTemplateLabel:"\u6dfb\u52a0\u6210\u672c\u8ba1\u7b97\u6a21\u677f",
manageScenariosTitle:"\u7ba1\u7406\u65b9\u6848",featureTemplateTitle:"\u8981\u7d20\u6a21\u677f",costEquationTitle:"\u6210\u672c\u65b9\u7a0b",geographyTitle:"\u5730\u7406",scenarioTitle:"\u65b9\u6848",actionTitle:"\u64cd\u4f5c",scenarioNameLabel:"\u65b9\u6848\u540d\u79f0",addBtnLabel:"\u6dfb\u52a0",srNoLabel:"\u5426\u3002",deleteLabel:"\u5220\u9664",duplicateScenarioName:"\u91cd\u590d\u7684\u65b9\u6848\u540d\u79f0",hintText:"\x3cdiv\x3e\u63d0\u793a\uff1a\u4f7f\u7528\u4ee5\u4e0b\u5173\u952e\u5b57\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e\uff1a\u5728\u5730\u7406\u4e2d\u4f7f\u7528\u540c\u4e00\u7c7b\u578b\u8d44\u4ea7\u7684\u603b\u6570\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e\uff1a\u4f7f\u7528\u7ebf\u8d44\u4ea7\u7684\u957f\u5ea6\u548c\u9762\u8d44\u4ea7\u7684\u9762\u79ef\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e\uff1a\u5728\u5730\u7406\u4e2d\u4f7f\u7528\u540c\u4e00\u7c7b\u578b\u7684\u7ebf\u8d44\u4ea7\u7684\u603b\u957f\u5ea6\u548c\u9762\u8d44\u4ea7\u7684\u603b\u9762\u79ef\x3c/li\x3e\x3c/ul\x3e\u60a8\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u529f\u80fd\uff1a\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3e\u8bf7\u6839\u636e\u60a8\u7684\u5de5\u7a0b\u9700\u8981\u7f16\u8f91\u6210\u672c\u65b9\u7a0b\u3002",
noneValue:"\u65e0",requiredCostEquation:"${layerName} \u7684\u6210\u672c\u516c\u5f0f\u65e0\u6548\uff1a${templateName}",duplicateTemplateMessage:"\u5b58\u5728\u9488\u5bf9 ${layerName} \u7684\u91cd\u590d\u6a21\u677f\u6761\u76ee\uff1a${templateName}",defaultEquationRequired:"${layerName} \u9700\u8981\u9ed8\u8ba4\u65b9\u7a0b\uff1a${templateName}",validCostEquationMessage:"\u8bf7\u8f93\u5165\u6709\u6548\u7684\u6210\u672c\u65b9\u7a0b",costEquationHelpText:"\u8bf7\u6839\u636e\u60a8\u7684\u5de5\u7a0b\u9700\u8981\u7f16\u8f91\u6210\u672c\u65b9\u7a0b",
scenarioHelpText:"\u8bf7\u6839\u636e\u60a8\u7684\u5de5\u7a0b\u9700\u8981\u9009\u62e9\u65b9\u6848",copyRowTitle:"\u590d\u5236\u884c",noTemplateAvailable:"\u8bf7\u4e3a ${layerName} \u81f3\u5c11\u6dfb\u52a0\u4e00\u4e2a\u6a21\u677f",manageScenarioLabel:"\u7ba1\u7406\u65b9\u6848",noLayerMessage:"\u8bf7\u5728 ${tabName} \u4e2d\u81f3\u5c11\u8f93\u5165\u4e00\u4e2a\u56fe\u5c42",noEditableLayersAvailable:"\u9700\u8981\u5728\u56fe\u5c42\u8bbe\u7f6e\u9009\u9879\u5361\u4e2d\u5c06\u56fe\u5c42\u9009\u4e2d\u4e3a\u53ef\u7f16\u8f91",
updateProjectCostCheckboxLabel:"\u66f4\u65b0\u5de5\u7a0b\u516c\u5f0f",updateProjectCostEquationHint:"\u63d0\u793a\uff1a\u8fd9\u5c06\u5141\u8bb8\u7528\u6237\u6839\u636e\u8981\u7d20\u6a21\u677f\u3001\u5730\u7406\u548c\u60c5\u666f\u4f7f\u7528\u4e0b\u9762\u5b9a\u4e49\u7684\u65b0\u516c\u5f0f\u66f4\u65b0\u73b0\u6709\u5de5\u7a0b\u4e2d\u5df2\u6dfb\u52a0\u7684\u8d44\u4ea7\u6210\u672c\u516c\u5f0f\u3002 \u5982\u679c\u672a\u627e\u5230\u8be5\u7ec4\u5408\uff0c\u5219\u5c06\u5176\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u6210\u672c\u65b9\u7a0b\uff0c\u5373\u5730\u7406\u548c\u60c5\u666f\u4e3a\u201c\u65e0\u201d\u3002 \u5982\u679c\u79fb\u9664\u4e86\u8981\u7d20\u6a21\u677f\uff0c\u5219\u6210\u672c\u5c06\u8bbe\u7f6e\u4e3a 0\u3002"},
statisticsSettings:{tabTitle:"\u5176\u4ed6\u8bbe\u7f6e",addStatisticsLabel:"\u6dfb\u52a0\u7edf\u8ba1\u6570\u636e",fieldNameTitle:"\u5b57\u6bb5",statisticsTitle:"\u6807\u6ce8",addNewStatisticsText:"\u6dfb\u52a0\u65b0\u7edf\u8ba1\u6570\u636e",deleteStatisticsText:"\u5220\u9664\u7edf\u8ba1\u6570\u636e",moveStatisticsUpText:"\u4e0a\u79fb\u7edf\u8ba1\u6570\u636e",moveStatisticsDownText:"\u4e0b\u79fb\u7edf\u8ba1\u6570\u636e",selectDeselectAllTitle:"\u5168\u9009"},projectCostSettings:{addProjectCostLabel:"\u6dfb\u52a0\u9644\u52a0\u5de5\u7a0b\u6210\u672c",
additionalCostValueColumnHeader:"\u503c",invalidProjectCostMessage:"\u5de5\u7a0b\u6210\u672c\u7684\u65e0\u6548\u6761\u76ee",additionalCostLabelColumnHeader:"\u6807\u6ce8",additionalCostTypeColumnHeader:"\u7c7b\u578b"},statisticsType:{countLabel:"\u8ba1\u6570",averageLabel:"\u5e73\u5747\u503c",maxLabel:"\u6700\u5927\u503c",minLabel:"\u6700\u5c0f\u503c",summationLabel:"\u603b\u548c",areaLabel:"\u9762\u79ef",lengthLabel:"\u957f\u5ea6"},_localized:{}}});