<?php
// +----------------------------------------------------------------------
// | CoreThink [ Simple Efficient Excellent ]
// +----------------------------------------------------------------------
// | Copyright (c) 2014 http://www.corethink.cn All rights reserved.
// +----------------------------------------------------------------------
// | Author: ijry <ijry@qq.com> <http://www.corethink.cn>
// +----------------------------------------------------------------------
namespace Home\Logic;
/**
 * 文档模型子模型 - 文章模型
 */
class ArticleLogic extends BaseLogic {
    /* 自动验证规则 */
    protected $_validate = array(
        array('content', 'require', '内容不能为空！', self::MUST_VALIDATE , 'regex', self::MODEL_BOTH),
    );

    /* 自动完成规则 */
    protected $_auto = array();
}
