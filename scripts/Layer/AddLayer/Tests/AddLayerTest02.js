// Auto generated by Testing Dashboard
// File        : scripts/Layer/AddLayer/Tests/AddLayerTest02.js
// Timestamp   : 2015-04-22 10:05:08
// Description : 

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function AddLayerTest02() {
    TdbTest.call(this, 'scripts/Layer/AddLayer/Tests/AddLayerTest02.js');
}

AddLayerTest02.prototype = new TdbTest();

AddLayerTest02.prototype.test00 = function() {
    qDebug('running AddLayerTest02.test00()...');
    this.setUp();
    this.dlgStart();
    this.dlgAppendCode('var map = new Map()');
    this.dlgAppendCode("map.put('DialogOpenedByTdb/LayerName', 'parent')");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Parent', '')");
    this.dlgAppendCode("WidgetFactory.restoreState(dialog, 'DialogOpenedByTdb', undefined, false, undefined, map)");
    this.dlgEnd();
    TdbTest.clickOnWidget('MainWindow::LayerListProDock::LayerWidgetPro::Add');
    this.dlgStart();
    this.dlgAppendCode('var map = new Map()');
    this.dlgAppendCode("map.put('DialogOpenedByTdb/LayerName', 'sublayer')");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Parent', 'parent')");
    this.dlgAppendCode("WidgetFactory.restoreState(dialog, 'DialogOpenedByTdb', undefined, false, undefined, map)");
    this.dlgEnd();
    TdbTest.clickOnWidget('MainWindow::LayerListProDock::LayerWidgetPro::Add');
    this.verifyDrawing('AddLayerTest02_000.dxf');
    this.tearDown();
    qDebug('finished AddLayerTest02.test00()');
};
