document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM已加载，开始绑定事件');
    
    // 使用事件委托确保所有按钮都能被捕获
    document.addEventListener('click', function(event) {
        const target = event.target;
        console.log('点击事件目标:', target.id);
        
        // 处理开始训练按钮
        if (target.id === 'startrltraining') {
            event.preventDefault();
            event.stopPropagation();
            console.log('开始训练按钮被点击');
            const modal = document.getElementById('successModal');
            if (modal) {
                modal.style.display = 'block';
                console.log('成功显示训练模态框');
            } else {
                console.error('未找到successModal元素');
            }
            return;
        }
        
        // 处理部署模型按钮
        if (target.id === 'deploymodel') {
            event.preventDefault();
            event.stopPropagation();
            console.log('部署模型按钮被点击');
            const modal = document.getElementById('deployREFNmodal');
            if (modal) {
                modal.style.display = 'block';
                console.log('成功显示部署模态框');
            } else {
                console.error('未找到deployREFNmodal元素');
            }
            return;
        }
        
        // 处理生成VNF按钮
        if (target.id === 'generatevnfdefense') {
            event.preventDefault();
            event.stopPropagation();
            console.log('生成VNF按钮被点击');
            const modal = document.getElementById('generateVNFDefense');
            if (modal) {
                modal.style.display = 'block';
                console.log('成功显示VNF模态框');
            } else {
                console.error('未找到generateVNFDefense元素');
            }
            return;
        }

        // 处理测试漏洞按钮
        if (target.id === 'testexploit') {
            event.preventDefault();
            event.stopPropagation();
            console.log('测试漏洞被点击');
            const modal = document.getElementById('TestExploit');
            if (modal) {
                modal.style.display = 'block';
                console.log('成功测试漏洞');
            } else {
                console.error('未找到漏洞');
            }
            return;
        }

        // 处理测试良性流量按钮
        if (target.id === 'testbenign') {
            event.preventDefault();
            event.stopPropagation();
            console.log('测试良性流量被点击');
            const modal = document.getElementById('TestBenign');
            if (modal) {
                modal.style.display = 'block';
                console.log('成功测试良性流量');
            } else {
                console.error('未找到良性测试');
            }
            return;
        }
        
        // 处理关闭按钮
        if (target.classList.contains('close-btn') || 
            (target.classList.contains('modal-btn') && target.closest('.modal'))) {
            event.preventDefault();
            event.stopPropagation();
            console.log('关闭按钮被点击');
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
            return;
        }
        
        // 点击模态框外部关闭
        if (target.classList.contains('modal')) {
            event.preventDefault();
            target.style.display = 'none';
            return;
        }

        // 处理显示所有测试按钮 - 显示柱状图
        if (target.id === 'showalltests') {
            event.preventDefault();
            event.stopPropagation();
            console.log('显示所有测试按钮被点击');
            
            // 显示柱状图容器
            const chartContainer = document.getElementById('chartContainer');
            if (chartContainer) {
                chartContainer.style.display = 'block';
                
                // 添加一点延迟确保DOM更新后再渲染图表
                setTimeout(() => {
                    renderBarChart();
                    console.log('成功显示柱状图');
                }, 100);
            } else {
                console.error('未找到chartContainer元素');
            }
            return;
        }
    });
    
    // 添加调试信息
    setTimeout(function() {
        console.log('页面元素检查:');
        console.log('startrltraining按钮:', document.getElementById('startrltraining'));
        console.log('deploymodel按钮:', document.getElementById('deploymodel'));
        console.log('generatevnfdefense按钮:', document.getElementById('generatevnfdefense'));
        console.log('successModal模态框:', document.getElementById('successModal'));
        console.log('deployREFNmodal模态框:', document.getElementById('deployREFNmodal'));
        console.log('generateVNFDefense模态框:', document.getElementById('generateVNFDefense'));
        console.log('testexploit模态框:', document.getElementById('testexploit'));
        console.log('testbenign模态框:', document.getElementById('testbenign'));
    }, 1000);
});

// 使用Canvas绘制柱状图的函数
// 使用Canvas绘制柱状图的函数
// 使用Canvas绘制柱状图的函数
// demo.js - 只修改柱状图颜色以匹配新风格
// 使用Canvas绘制柱状图的函数
function renderBarChart() {
    const canvas = document.getElementById('barChartCanvas');
    if (!canvas) {
        console.error('Canvas element not found');
        return;
    }

    const ctx = canvas.getContext('2d');
    
    // 设置Canvas尺寸
    const container = canvas.parentElement.parentElement;
    canvas.width = container.clientWidth - 40;
    canvas.height = 500;
    
    // 清除Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 数据 - 22个测试用例的成功率
    const data = [22, 43, 33, 22, 10, 30, 46, 21, 33, 43, 42, 30, 9, 46, 35, 28, 15, 40, 25, 38, 19, 47];
    const maxValue = Math.max(...data);
    
    // 修改这里：增加柱子之间的间距
    const barSpacing = 8; // 柱子之间的间距，从原来的2增加到8
    const totalBarsWidth = canvas.width - 140; // 可用于柱子的总宽度
    const barWidth = (totalBarsWidth / data.length) - barSpacing; // 调整柱子宽度计算
    
    const chartHeight = canvas.height - 120; // 增加底部空间，为X轴标签留空间
    
    // 绘制标题 - 增大字体
    ctx.fillStyle = '#2c3e50';
    ctx.font = 'bold 22px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('REFN Assessment Results - 22 Exploit Families', canvas.width / 2, 30);
    
    // 绘制副标题 - 增大字体
    ctx.font = '16px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
    ctx.fillText('Success rate across different exploit families and device types', canvas.width / 2, 55);
    
    // 绘制坐标轴
    ctx.strokeStyle = '#bdc3c7';
    ctx.lineWidth = 1;
    ctx.beginPath();
    // Y轴
    ctx.moveTo(80, 60);
    ctx.lineTo(80, 60 + chartHeight);
    // X轴
    ctx.moveTo(80, 60 + chartHeight);
    ctx.lineTo(canvas.width - 40, 60 + chartHeight);
    ctx.stroke();
    
    // 绘制Y轴刻度 - 增大字体
    ctx.fillStyle = '#7f8c8d';
    ctx.font = '14px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
    ctx.textAlign = 'right';
    for (let i = 0; i <= 5; i++) {
        const value = (maxValue / 5) * i;
        const y = 60 + chartHeight - (chartHeight / 5) * i;
        
        ctx.beginPath();
        ctx.moveTo(75, y);
        ctx.lineTo(80, y);
        ctx.stroke();
        
        ctx.fillText(Math.round(value) + '%', 70, y + 4);
    }
    
    // 绘制Y轴标签 - 增大字体
    ctx.save();
    ctx.translate(20, 60 + chartHeight / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.font = '16px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
    ctx.fillStyle = '#7f8c8d';
    ctx.fillText('Success Rate (%)', 0, 0);
    ctx.restore();
    
    // 绘制X轴标签 - 增大字体
    ctx.textAlign = 'center';
    ctx.fillStyle = '#7f8c8d';
    ctx.font = '14px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
    
    // 绘制柱状图和动画
    let animationProgress = 0;
    const animationDuration = 1500; // 1.5秒动画
    const startTime = Date.now();
    
    function animate() {
        const currentTime = Date.now();
        animationProgress = Math.min(1, (currentTime - startTime) / animationDuration);
        
        // 清除柱状图区域
        ctx.clearRect(80, 60, canvas.width - 120, chartHeight);
        
        // 绘制柱状图
        for (let i = 0; i < data.length; i++) {
            // 修改这里：调整x坐标计算，增加间距
            const barHeight = (data[i] / maxValue) * chartHeight * animationProgress;
            const x = 82 + i * (barWidth + barSpacing);
            const y = 60 + chartHeight - barHeight;
            
            // 创建渐变效果 - 使用新颜色方案
            const gradient = ctx.createLinearGradient(x, y, x, y + barHeight);
            gradient.addColorStop(0, '#3498db');
            gradient.addColorStop(1, '#2980b9');
            
            // 绘制柱子
            ctx.fillStyle = gradient;
            ctx.fillRect(x, y, barWidth, barHeight);
            
            // 绘制柱子边框
            ctx.strokeStyle = '#2471a3';
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, barWidth, barHeight);
            
            // 绘制柱子顶部的值 - 增大字体
            if (animationProgress > 0.8) {
                ctx.fillStyle = '#2c3e50';
                ctx.font = 'bold 13px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
                
                // 如果柱子太矮，把数值显示在柱子上面
                if (barHeight < 20) {
                    ctx.fillText(data[i] + '%', x + barWidth / 2, y - 5);
                } else {
                    // 否则显示在柱子内部
                    ctx.fillStyle = 'white';
                    ctx.fillText(data[i] + '%', x + barWidth / 2, y + 15);
                }
            }
            
            // 绘制X轴标签（测试用例编号）- 修改这里：显示所有标签，不省略
            ctx.fillStyle = '#7f8c8d';
            ctx.font = '13px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
            ctx.fillText((i + 1).toString(), x + barWidth / 2, 60 + chartHeight + 20);
        }
        
        // 绘制X轴标签 - 增大字体
        ctx.fillStyle = '#7f8c8d';
        ctx.font = '16px "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Test Cases', canvas.width / 2, canvas.height - 10);
        
        // 继续动画直到完成
        if (animationProgress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    // 开始动画
    animate();
}


// 窗口调整大小时重新绘制图表
window.addEventListener('resize', function() {
    if (document.getElementById('chartContainer') && document.getElementById('chartContainer').style.display === 'block') {
        renderBarChart();
    }
});

getRandomInt = function(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

//添加随机节点
addRandomNode = function(){
   idNum = cy.nodes().size(),
   setID = idNum.toString(),
   cy.add([{group: "nodes",
            data: {"id": setID,
                   "name": "added",
                   "resources": [],
                   "properties": []
                   },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                },
             }]); // cy.add
   }; // addRandomNode

//添加指定ID的节点
addNodeWithID = function(idstr){
   cy.add([{group: "nodes",
            data: {"id": idstr,
                   "label": idstr,
                   "resources": [],
                   "properties": []
                   },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                },
             }]); // cy.add
   }; // addRandomNode

addMbFSM = function(idstr){
  var model = idstr.split("_");
  var i = 0;
  
  // REFN model
  if (model[0] == "NewExploit"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"NULL",
        "parent" : idstr,
        "label" : "",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }
    ]); // cy.add
  }
  if (model[0] == "REFNServer"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"NULL",
        "parent" : idstr,
        "label" : "",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }
    ]); // cy.add
  }

  // IoTGW model  
  if (model[0] == "IoTGW"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"NULL",
        "parent" : idstr,
        "label" : "",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }
    ]); // cy.add
  }
  if (model[0] == "FMTLPyTorch"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"NULL",
        "parent" : idstr,
        "label" : "",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }
    ]); // cy.add
  }
  if (model[0] == "Attacker"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"NULL",
        "parent" : idstr,
        "label" : "",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }
    ]); // cy.add
  }
  if (model[0] == "BenignUser"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"NULL",
        "parent" : idstr,
        "label" : "",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }
    ]); // cy.add
  }
  if (model[0] == "Classifier"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"NULL",
        "parent" : idstr,
        "label" : "",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }
    ]); // cy.add
  }
  if (model[0] == "CloudGateway"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"NULL",
        "parent" : idstr,
        "label" : "",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }
    ]); // cy.add
  }
  if (model[0] == "VNFDefense1"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"NULL",
        "parent" : idstr,
        "label" : "",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }
    ]); // cy.add
  }
  if (model[0] == "VNFDefense2"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"NULL",
        "parent" : idstr,
        "label" : "",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }
    ]); // cy.add
  }
  if (model[0] == "CloudAsset1"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"NULL",
        "parent" : idstr,
        "label" : "",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }
    ]); // cy.add
  }
  if (model[0] == "CloudAsset2"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"NULL",
        "parent" : idstr,
        "label" : "",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }
    ]); // cy.add
  }
  if (model[0] == "DAGOpenAllow"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"Window",
        "parent" : idstr,
        "label" : "Window",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"Allow_Open",
        "parent" : idstr,
        "label" : "Allow_Open",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"Any",
        "parent" : idstr,
        "label" : "Any",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"NULL"+idstr+"INVAL",
        "label" : "",
        "source" : idstr+"Any",
        "target" : idstr+"Allow_Open",
      }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"NULL"+idstr+"SYN_RECEIVED",
        "label" : "",
        "source" : idstr+"Allow_Open",
        "target" : idstr+"Window",
      }
    }
    ]); // cy.add
  }

  if (model[0] == "DAGOpenBlock"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"Window",
        "parent" : idstr,
        "label" : "Window",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"Allow_Open",
        "parent" : idstr,
        "label" : "Block_Open",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"Any",
        "parent" : idstr,
        "label" : "Any",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"NULL"+idstr+"INVAL",
        "label" : "",
        "source" : idstr+"Any",
        "target" : idstr+"Allow_Open",
      }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"NULL"+idstr+"SYN_RECEIVED",
        "label" : "",
        "source" : idstr+"Allow_Open",
        "target" : idstr+"Window",
      }
    }
    ]); // cy.add
  }

  if (model[0] == "DAGCloseAllow"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"Window",
        "parent" : idstr,
        "label" : "Window",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"Allow_Open",
        "parent" : idstr,
        "label" : "Allow_Close",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"Any",
        "parent" : idstr,
        "label" : "Any",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"NULL"+idstr+"INVAL",
        "label" : "",
        "source" : idstr+"Any",
        "target" : idstr+"Allow_Open",
      }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"NULL"+idstr+"SYN_RECEIVED",
        "label" : "",
        "source" : idstr+"Allow_Open",
        "target" : idstr+"Window",
      }
    }
    ]); // cy.add
  }

    if (model[0] == "DAGCloseBlock"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"Window",
        "parent" : idstr,
        "label" : "Window",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"Allow_Open",
        "parent" : idstr,
        "label" : "Block_Close",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"Any",
        "parent" : idstr,
        "label" : "Any",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"NULL"+idstr+"INVAL",
        "label" : "",
        "source" : idstr+"Any",
        "target" : idstr+"Allow_Open",
      }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"NULL"+idstr+"SYN_RECEIVED",
        "label" : "",
        "source" : idstr+"Allow_Open",
        "target" : idstr+"Window",
      }
    }
    ]); // cy.add
  }

  // FW model  
  if (model[0] == "FW"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"NULL",
        "parent" : idstr,
        "label" : "NULL",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"SYN_RECEIVED",
        "parent" : idstr,
        "label" : "SYN_RECEIVED",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"INVAL",
        "parent" : idstr,
        "label" : "INVAL",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"NULL"+idstr+"INVAL",
        "label" : "*-SYN",
        "source" : idstr+"NULL",
        "target" : idstr+"INVAL",
      }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"NULL"+idstr+"SYN_RECEIVED",
        "label" : "SYN",
        "source" : idstr+"NULL",
        "target" : idstr+"SYN_RECEIVED",
      }
    }
    ]); // cy.add
  }

  // IPS model  
  if (model[0] == "IPS"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"NULL",
        "parent" : idstr,
        "label" : "NULL",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"SYN_RECEIVED",
        "parent" : idstr,
        "label" : "SYN_RECEIVED",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"NULL"+idstr+"SYN_RECEIVED",
        "label" : "SYN",
        "source" : idstr+"NULL",
        "target" : idstr+"SYN_RECEIVED",
      }
    }
    ]); // cy.add
  }

// Proxy model  
  if (model[0] == "Proxy"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"NULL",
        "parent" : idstr,
        "label" : "NULL",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"INVAL",
        "parent" : idstr,
        "label" : "INVAL",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"NULL"+idstr+"INVAL",
        "label" : "*-SYN",
        "source" : idstr+"NULL",
        "target" : idstr+"INVAL",
      }
    }
    ]); // cy.add
  }

  // BohateiSYNIPS Model
  if (model[0] == "BohateiSYNIPS"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"DiffCount=SYNCount",
        "parent" : idstr,
        "label" : "DiffCount=SYNCount",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"DiffCount>0",
        "parent" : idstr,
        "label" : "DiffCount>0",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"DiffCount=0",
        "parent" : idstr,
        "label" : "DiffCount=0",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"DiffCount=0"+idstr+"DiffCount>0",
        "label" : "SYN",
        "source" : idstr+"DiffCount=0",
        "target" : idstr+"DiffCount>0",
      }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"DiffCount=SYNCount"+idstr+"DiffCount>0",
        "label" : "ACK",
        "source" : idstr+"DiffCount=SYNCount",
        "target" : idstr+"DiffCount>0",
      }
    }
    ]); // cy.add
  }

  // CountingIPS Model
  if (model[0] == "CountingIPS"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"DiffCount=SYNCount",
        "parent" : idstr,
        "label" : "attack",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"DiffCount>0",
        "parent" : idstr,
        "label" : "unknown",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"DiffCount=0",
        "parent" : idstr,
        "label" : "benign",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"DiffCount=0"+idstr+"DiffCount>0",
        "label" : "SYN",
        "source" : idstr+"DiffCount=0",
        "target" : idstr+"DiffCount>0",
      }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"DiffCount=SYNCount"+idstr+"DiffCount>0",
        "label" : "ACK",
        "source" : idstr+"DiffCount=SYNCount",
        "target" : idstr+"DiffCount>0",
      }
    }
    ]); // cy.add
  }

    // SYNProxy Model
  if (model[0] == "SYNProxy"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"DiffCount=SYNCount",
        "parent" : idstr,
        "label" : "attack",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"DiffCount>0",
        "parent" : idstr,
        "label" : "unknown",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"DiffCount=0",
        "parent" : idstr,
        "label" : "benign",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"DiffCount=0"+idstr+"DiffCount>0",
        "label" : "tcp completed",
        "source" : idstr+"DiffCount>0",
        "target" : idstr+"DiffCount=0",
      }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"DiffCount=SYNCount"+idstr+"DiffCount>0",
        "label" : "!tcp completed",
        "source" : idstr+"DiffCount>0",
        "target" : idstr+"DiffCount=SYNCount",
      }
    }
    ]); // cy.add
  }

  if (model[0] == "LightIPS"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"DiffCount>0",
        "parent" : idstr,
        "label" : "bad_conn>=3",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"DiffCount=0",
        "parent" : idstr,
        "label" : "!(bad_conn>=3)",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"DiffCount=0"+idstr+"DiffCount>0",
        "label" : "bad_conn>=3",
        "source" : idstr+"DiffCount=0",
        "target" : idstr+"DiffCount>0",
      }
    }
    ]); // cy.add
  }

  if (model[0] == "HeavyIPS"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"DiffCount>0",
        "parent" : idstr,
        "label" : "bad_signature",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    },{group: "nodes",
      "data" : {
        "id" : idstr+"DiffCount=0",
        "parent" : idstr,
        "label" : "!bad_signature",
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }, {group: "edges",
      "data" : {
        "id" : idstr+"DiffCount=0"+idstr+"DiffCount>0",
        "label" : "bad_signature",
        "source" : idstr+"DiffCount=0",
        "target" : idstr+"DiffCount>0",
      }
    }
    ]); // cy.add
  }

  // Allow Model
  if (model[0] == "Allow"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"DiffCount=SYNCount",
        "parent" : idstr,
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }
    ]); // cy.add
  }

// Block Model
  if (model[0] == "Block"){
    cy.add([{group: "nodes",
      "data" : {
        "id" : idstr+"DiffCount=SYNCount",
        "parent" : idstr,
      },
             position: {
                x: getRandomInt(100,800),
                y: getRandomInt(100,500),
                }
    }
    ]); // cy.add
  }

};

addNodeWithFSM = function(idstr){
   addNodeWithID(idstr);

   // add tiny FSM
   addMbFSM(idstr);

}; // addRandomNode

// 添加随机边
addRandomEdge = function(){
   nodeCount = cy.nodes().size()
   edgeCount = cy.edges().size()
   idNum = edgeCount
   setID = idNum.toString(),
   sourceNode = getRandomInt(0, nodeCount-1)
   targetNode = getRandomInt(0, nodeCount-1)
   cy.add([{group: "edges",
            data: {"id": "e" + setID,
                   "source": sourceNode,
                   "target": targetNode
                   }
             }]); // cy.add
  }; // addRandomEdge

//添加指定ID的边
addEdgeWithID = function(srcID, dstID, edgeID, context){
   cy.add([{group: "edges",
            data: {"id": edgeID,
                   "source": srcID,
                   "target": dstID,
                   "label": context
                   }
             }]); // cy.add
  }; // addRandomEdge

modLabel = function(IDstr, val){
   cy.getElementById(IDstr).css({'content': val});
}; // addRandomEdge

readMultipleFiles = function (evt) {
    var r = new FileReader();
    r.onload = (function (f) {
        return function (e) {
            var contents = e.target.result;
        };
    })(f);
    r.readAsText(f);
}

fitGraph = function() {
  cy.fit();
  cy.forceRender()
} // fitGraph

freshLayout = function(){
   coseOptions = {
       name: 'cose',
       ready               : function() {},
       stop                : function() {},
       refresh             : 0,
       fit                 : true, 
       padding             : 30, 
       randomize           : true,
       debug               : false,
       nodeRepulsion       : 10000,
       nodeOverlap         : 10,
       idealEdgeLength     : 10,
       edgeElasticity      : 100,
       nestingFactor       : 5, 
       gravity             : 250, 
       numIter             : 100,
       initialTemp         : 200,
       coolingFactor       : 0.95, 
       minTemp             : 1
       };

   cy.layout(coseOptions);
   cy.fit()
} // freshLayout

$(document).ready(function() {
   console.log("document ready");
   var $cy = $("#cy");
   $cy.cytoscape({
       style: [
    {
      selector: 'node',
      css: {
        'content': 'data(label)',
        'text-valign': 'center',
        'text-halign': 'center'
      }
    },
    {
      selector: '$node > node',
      css: {
        'padding-top': '10px',
        'padding-left': '10px',
        'background-color': 'green',
        'padding-bottom': '10px',
        'padding-right': '10px',
        'text-color': 'red',
        'text-valign': 'bottom',
        'text-halign': 'center',
        'shape': 'rectangle'
      }
    },
    {
      selector: 'edge',
      css: {
        'content': 'data(label)',
        'width': 1,
        'text-color': 'red',
        'line-color': 'grey',
        "target-arrow-shape" : "triangle"
      }
    },
    {
      selector: ':selected',
      css: {
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      }
    }
  ],

       showOverlay: false,
       minZoom: 0.1,
       maxZoom: 4.0,
       layout: {
         name: 'cose',
         fit: true
         },

    ready: function() {
        console.log("cy ready");
        cy = this;
        cy.load( cy.elements('*').jsons() );

        // 获取图片元素
        var img = document.getElementById('preview');
        
        // 监听图片的加载错误事件
        img.onerror = function() {
            console.error("图片加载失败！请检查路径: ", img.src);
            alert("图片加载失败！请检查控制台(F12)查看详细路径。当前路径是: " + img.src);
        };
        
        // 监听图片加载成功事件
        img.onload = function() {
            console.log("图片加载成功！");
            alert("图片加载成功！");
        };
        
        // 原有的文件上传预览功能
        document.getElementById('filechoice').addEventListener('change', function(e) {
    var file = e.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            // 获取画布元素
            var cyCanvas = document.getElementById('cy');
            // 将画布的背景设置为上传的图片
            cyCanvas.style.backgroundImage = `url(${e.target.result})`;
            cyCanvas.style.backgroundSize = 'contain'; // 关键：使图片覆盖整个画布
            cyCanvas.style.backgroundPosition = 'center';
            cyCanvas.style.backgroundRepeat = 'no-repeat';

            // 可选：隐藏原本的图片预览元素
            document.getElementById('preview').style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
});
   
        // 多个按钮绑定点击事件
        $("#testexploit").click(function(){
          const Http = new XMLHttpRequest();
          const url='http://127.0.0.1:5000/refntestexploit';
          Http.open("GET", url);
          Http.send();
          Http.onreadystatechange = (e) => {
            console.log(Http.responseText);
            document.getElementById('contents').textContent = Http.responseText;
          }
        });
        $("#showprotospec").click(function(){
          const Http = new XMLHttpRequest();
          const url='http://127.0.0.1:5000/showprotospec';
          Http.open("GET", url);
          Http.send();
          Http.onreadystatechange = (e) => {
            console.log(Http.responseText);
            document.getElementById('contents').textContent = Http.responseText;
          }
        });
        $("#updatemodel").click(function(){
          const Http = new XMLHttpRequest();
          const url='http://127.0.0.1:5000/radioupdate';
          Http.open("GET", url);
          Http.send();
          Http.onreadystatechange = (e) => {
            console.log(Http.responseText);
            document.getElementById('contents').textContent = Http.responseText;
          }
        });
        $("#modeltorule").click(function(){
          const Http = new XMLHttpRequest();
          const url='http://127.0.0.1:5000/modeltorule';
          Http.open("GET", url);
          Http.send();
          Http.onreadystatechange = (e) => {
            console.log(Http.responseText);
            document.getElementById('contents').textContent = Http.responseText;
          }
        });
        $("#autopatchtest").click(function(){
          const Http = new XMLHttpRequest();
          const url='http://127.0.0.1:5000/autopatchtest';
          Http.open("GET", url);
          Http.send();
          Http.onreadystatechange = (e) => {
            console.log(Http.responseText);
            document.getElementById('contents').textContent = Http.responseText;
          }
        });

        $("#selectexploit").click(function(){
          const Http = new XMLHttpRequest();
          const url='http://127.0.0.1:5000/showprotoparserhttp';
          Http.open("GET", url);
          Http.send();
          Http.onreadystatechange = (e) => {
            console.log(Http.responseText);
            document.getElementById('contents').textContent = Http.responseText;
          }
        });
        $("#showprotoparserhttp").click(function(){
          const Http = new XMLHttpRequest();
          const url='http://127.0.0.1:5000/showprotoparserhttp';
          Http.open("GET", url);
          Http.send();
          Http.onreadystatechange = (e) => {
            console.log(Http.responseText);
            document.getElementById('contents').textContent = Http.responseText;
          }
        });
        $("#updatemodelhttp").click(function(){
          const Http = new XMLHttpRequest();
          const url='http://127.0.0.1:5000/radioupdatehttp';
          Http.open("GET", url);
          Http.send();
          Http.onreadystatechange = (e) => {
            console.log(Http.responseText);
            document.getElementById('contents').textContent = Http.responseText;
          }
        });
        $("#modeltorulehttp").click(function(){
          const Http = new XMLHttpRequest();
          const url='http://127.0.0.1:5000/modeltorulehttp';
          Http.open("GET", url);
          Http.send();
          Http.onreadystatechange = (e) => {
            console.log(Http.responseText);
            document.getElementById('contents').textContent = Http.responseText;
          }
        });
        $("#autopatchtesthttp").click(function(){
          const Http = new XMLHttpRequest();
          const url='http://127.0.0.1:5000/autopatchtesthttp';
          Http.open("GET", url);
          Http.send();
          Http.onreadystatechange = (e) => {
            console.log(Http.responseText);
            document.getElementById('contents').textContent = Http.responseText;
          }
        });

        $("#applypolicy").click(function(){
          document.getElementById('contentpolicy').textContent = "F(5,30,open) -> block"
        });
        $("#nested").click(function(){
          cy.$('node > node').css({visibility:'visible'});
        });
        $("#click").click(function(){
          cy.$('node > node').css({visibility:'hidden'});
        });

        cy.on('tap', 'node', function(e) {
            var evtTarget = event.cyTarget;
        }); // cy.on

        } // cy ready
        

   }); // cy initializer: cytoscape
})  // document ready