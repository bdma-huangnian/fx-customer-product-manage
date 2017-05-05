<?php
// +----------------------------------------------------------------------
// | CoreThink [ Simple Efficient Excellent ]
// +----------------------------------------------------------------------
// | Copyright (c) 2014 http://www.corethink.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: ijry <ijry@qq.com> <http://www.corethink.cn>
// +----------------------------------------------------------------------
namespace Admin\Model;
use Think\Model;
/**
 * 插件模型
 * @author yangweijie <yangweijiester@gmail.com>
 */
class MenuModel extends Model {
    /* 自动验证规则 */
    protected $_validate = array(
        array('title','require','标题必须填写'),
        array('url','require','链接必须填写'),
    );

    /* 自动完成规则 */
    protected $_auto = array(
        array('title', 'htmlspecialchars', self::MODEL_BOTH, 'function'),
        array('status', '1', self::MODEL_INSERT),
    );
}