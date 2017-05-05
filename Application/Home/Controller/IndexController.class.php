<?php
// +----------------------------------------------------------------------
// | CoreThink [ Simple Efficient Excellent ]
// +----------------------------------------------------------------------
// | Copyright (c) 2014 http://www.corethink.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: ijry <ijry@qq.com> <http://www.corethink.cn>
// +----------------------------------------------------------------------
namespace Home\Controller;
use Think\Page;
/**
 * 前台首页控制器
 * 主要获取首页聚合数据
 */
class IndexController extends HomeController {
    //系统首页
    public function index(){
        exit();
        if(C('WEB_SITE_HOME_PAGE') !== 'Index/index'){
            $this->redirect(C('WEB_SITE_HOME_PAGE'));
        }
        $this->assign('meta_title', '首页');
        $this->assign('meta_keywords', C('WEB_SITE_KEYWORD'));
        $this->assign('meta_description', C('WEB_SITE_DESCRIPTION'));
        $this->display();
    }

    //搜索
    public function search(){
        exit();
        if($_GET['key']){
            $key  = (string)I('key');
            $list = D('Document')->page(!empty($_GET["p"])?$_GET["p"]:1, 10)->lists($category = null, $field = true, $order = "`create_time` desc", $status = 1, $uid = false, $pos = false , $key);
            $count = D('Document')->listCount($category, $status = 1, $uid = false, $pos = false, $key);
            $Page = new Page($count,10);
            $show = $Page->show();
            $this->assign('list', $list);
            $this->assign('page',$show);
            $this->assign('meta_title', '搜索');
            $this->assign('meta_keywords', C('WEB_SITE_KEYWORD'));
            $this->assign('meta_description', C('WEB_SITE_DESCRIPTION'));
        }else{
            $this->error("请您输入关键字后搜索");
        }
        $this->display();
    }

    public function productlist(){
        $map['company'] = array('like', '%喜泰%');
        $result = M('product_category')->where($map)->select();

	$this->assign('company_name', 'Xtai喜泰');
	$this->assign('comp', 1);
        $this->assign('prolist', $result);
        $this->display();
    }

    public function productlist1(){
        $map['company'] = array('like', '%派尼尔%');
        $result = M('product_category')->where($map)->select();

	$this->assign('company_name', '派尼尔');
	$this->assign('comp', 2);
        $this->assign('prolist', $result);
        $this->display('Index/productlist');
    }

    public function productsublist(){
        $map['product_cate_id'] = intval(I('id'));
        $map['category_id'] = 2;
        $result = M('Document')->where($map)->select();

	if(intval(I('comp')) == 1){
	    $company_name = 'Xtai喜泰';
	    $comp = 1;
	}elseif(intval(I('comp')) == 2){
	    $company_name = '派尼尔';
            $comp = 2;
	}
	$this->assign('company_name', $company_name);
	$this->assign('comp', $comp);
        $this->assign('prolist', $result);
        $this->display();
    }

    public function product($id = 0){
        /* 标识正确性检测 */
        if(!($id && is_numeric($id))){
            $this->error('文档ID错误！');
        }

        /* 页码检测 */
        $p = intval($p);
        $p = empty($p) ? 1 : $p;

        /* 获取详细信息 */
        $Document = D('Document');
        $info = $Document->detail($id);
        if(!$info){
            $this->error($Document->getError());
        }
        if(0 < $info['link_id']){
            redirect(get_link($info['link_id']));
        }

	if(intval(I('comp')) == 1){
            $company_name = 'Xtai喜泰';
            $comp = 1;
        }elseif(intval(I('comp')) == 2){
            $company_name = '派尼尔';
            $comp = 2;
        }
        $this->assign('company_name', $company_name);
        $this->assign('comp', $comp);
        $this->assign('info', $info);
        $this->display();
    }

    public function contact(){
	$this->display();
    }

    public function videos(){
	$this->display();
    }

    public function map(){
	$this->display();
    }

    public function maps(){
        $this->display();
    }
}
