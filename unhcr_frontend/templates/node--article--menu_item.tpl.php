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
</div>
