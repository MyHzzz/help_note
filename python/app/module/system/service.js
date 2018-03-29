
// 自定义服务


angular.module('com.system')
.service('systemService',['baseService', 'Socket', function(baseService, Socket){ 
    this.name = 'this.name';  
    this.list = function(params){ 
        return baseService.post("/BaseSSM/angular/list.do", params);
    };   
    this.get = function(params){ 
        return baseService.post("/BaseSSM/angular/get.do", params);
    }; 
    this.del = function(params){ 
        return baseService.post("/BaseSSM/angular/delete.do", params);
    };
    this.update = function(params){ 
        return baseService.post("/BaseSSM/angular/update.do", params);
    }; 
    this.do = function(url, params){ 
        return baseService.post(url, params);
    }; 

    this.statis = function(params){ 
        return baseService.post("/do/system/home/tocken", params);
    };

    this.getports = function(params){ 
        return baseService.post("/do/system/getports/tocken", params);
    };
    this.setports = function(params){ 
        return baseService.post("/do/system/setports/" + params.port + "-" + (1-params.value));
    };
    this.turnCamera = function(params){ 
        return baseService.post("/do/system/cameraTurn/" + params.value);
    };
    this.move = function(params){ 
        return baseService.post("/do/system/move/" + params.value);
    };

    this.sendSocketMsg = function(params){ 
        return baseService.sendSocketMsg(params);
    };
    this.sendSocketEvent = function(params){ 
        return baseService.sendSocketEvent(params);
    };

}]);

