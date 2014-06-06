<?php
/**
 * @file
 * node--article--menu_item.tpl.php
 */
?>
<?php $node = node_load($node->nid); ?>
<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
  <?php
  $content['field_image'][0]['#item']['attributes']['class'][] = 'img-responsive';

  print render($content['field_image']);
  ?>
  <em class="lead text-danger"><?php print $node->title; ?></em>
  <div class="content"<?php print $content_attributes; ?>>
    <?php
    hide($content['field_image']);

    print render($content);
    ?>
  </div>
  <button type="button" class="btn btn-default pull-right"
          onclick="jQuery('#mini-panel-financial_information_content').append('<iframe src=\'/node/get/ajax/<?php print $node->nid; ?>\'></iframe>');">
    <span class="glyphicon glyphicon-plus"></span>
  </button>
</div>
