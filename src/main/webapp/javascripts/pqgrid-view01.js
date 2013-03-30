$(function () {
    var colM = [
    { title: "ShipCountry", width: 100 },
    { title: "Customer Name", width: 100 },
    { title: "Order ID", width: 100 },
            { title: "Order Date", width: "100" },
            { title: "Required Date", width: 100 },
            { title: "Shipped Date", width: 100 },
            { title: "Shipping Via", width: 100 },
    { title: "Freight", width: 100, align: "right" },
    { title: "Shipping Name", width: 160 },
    { title: "Shipping Address", width: 300 },
    { title: "Shipping City", width: 100 },
    { title: "Shipping Region", width: 100 },
    { title: "Shipping PostalCode", width: 100 }
            ];
    var dataModel = {
        location: "remote",
        sorting: "remote",
        paging: "remote",
        dataType: "JSON",
        method: "GET",
        curPage: 1,
        rPP: 20,
        sortIndx: 2,
        sortDir: "up",
        rPPOptions: [1, 10, 20, 30, 40, 50, 100, 500, 1000],
        getUrl: function () {
            var sortDir = (this.sortDir == "up") ? "asc" : "desc";
            var sort = ['ShipCountry', 'contactName', 'orderID', 'OrderDate', 'RequiredDate', 'ShippedDate',
                 'ShipVia', 'Freight', 'ShipName', 'ShipAddress', 'ShipCity', 'ShipRegion', 'ShipPostalCode'];
            return { url: "json/pqgrid-view01.json" };
        },
        getData: function (dataJSON) {
            return { curPage: dataJSON.curPage, totalRecords: dataJSON.totalRecords, data: dataJSON.data };                
        }
    }

    var grid1 = $("div#grid_paging").pqGrid({ width: 900, height: 400,
        dataModel: dataModel,
        colModel: colM,
        title:"Shipping Orders",
        resizable: true,            
        columnBorders: true,
        freezeCols: 2
    });
});