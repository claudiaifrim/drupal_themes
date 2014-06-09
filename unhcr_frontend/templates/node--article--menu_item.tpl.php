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
    <button type="button" class="btn btn-default pull-right" onclick="
        jQuery('#mini-panel-financial_information_content').load('/node/get/ajax/<?php print $node->nid; ?>', function(){
            jQuery(this).slideDown();
        });

        var offset = jQuery(this).offset();
        jQuery('html, body').animate({
            scrollTop: offset.top
        }, 1000);

        jQuery('button > span.glyphicon.glyphicon-plus').parent().removeClass('hide-element');
        jQuery('button > span.glyphicon.glyphicon-minus').parent().addClass('hide-element');
        jQuery(this).next('.hide-element').removeClass('hide-element');
        jQuery(this).addClass('hide-element');
    ">
        <span class="glyphicon glyphicon-plus"></span>
    </button>
    <button type="button" class="btn btn-default pull-right hide-element" onclick="
        jQuery('#mini-panel-financial_information_content').slideUp();
        jQuery('button > span.glyphicon.glyphicon-plus').parent().removeClass('hide-element');
        jQuery(this).addClass('hide-element');

        var offset = jQuery(this).closest('.node').offset();
        jQuery('html, body').animate({
              scrollTop: offset.top
            }, 1000);
    ">
        <span class="glyphicon glyphicon-minus"></span>
    </button>
</div>
