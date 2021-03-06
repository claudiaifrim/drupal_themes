<?php
/**
 * @file
 * page.tpl.php
 */
?>
<div id="header">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <?php if ($logo): ?>
          <a class="logo" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
            <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
          </a>
        <?php endif; ?>
        <ul id="filters" class="list-inline">
          <li>
            <a href="#">World <small>(ALL)</small> /</a>
            <small>Region</small>
          </li>
          <li>
            <a href="#">World <small>(ALL)</small> /</a>
            <small>Country</small>
          </li>
          <li>
            <a href="#"><small>(ALL)</small></a>
            <small>Operations</small>
          </li>
        </ul><!-- #filters -->
      </div><!-- .col-md-12 -->
    </div><!-- .row -->
    <?php if (!empty($page['navigation'])): ?>
      <div class="row">
        <div class="col-md-12">
          <?php print render($page['navigation']); ?>
        </div><!-- .col-md-12 -->
      </div><!-- .row -->
    <?php endif; ?>
  </div><!-- .container -->
  <header id="navbar" role="banner" class="<?php print $navbar_classes; ?>">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <?php if (!empty($primary_nav) || !empty($secondary_nav) || !empty($page['navigation'])): ?>
        <div class="navbar-collapse collapse">
          <nav role="navigation">
            <?php if (!empty($primary_nav)): ?>
              <?php print render($primary_nav); ?>
            <?php endif; ?>
            <?php if (!empty($secondary_nav)): ?>
              <?php print render($secondary_nav); ?>
            <?php endif; ?>
          </nav>
        </div>
      <?php endif; ?>
    </div>
  </header>
</div>
<div class="main-container container">
  <header role="banner" id="page-header">
    <?php if (!empty($site_slogan)): ?>
      <p class="lead"><?php print $site_slogan; ?></p>
    <?php endif; ?>
    <?php print render($page['header']); ?>
  </header><!-- #page-header -->
  <div class="row">
    <?php if (!empty($page['sidebar_first'])): ?>
      <aside class="col-sm-3" role="complementary">
        <?php print render($page['sidebar_first']); ?>
      </aside><!-- #sidebar-first -->
    <?php endif; ?>
    <section<?php print $content_column_class; ?>>
      <?php if (!empty($page['highlighted'])): ?>
        <div class="highlighted jumbotron"><?php print render($page['highlighted']); ?></div>
      <?php endif; ?>
      <?php if (!empty($breadcrumb)): print $breadcrumb; endif;?>
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if (!empty($title)): ?>
        <h1 class="page-header"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php if (!empty($tabs)): ?>
        <?php print render($tabs); ?>
      <?php endif; ?>
      <?php if (!empty($page['help'])): ?>
        <?php print render($page['help']); ?>
      <?php endif; ?>
      <?php if (!empty($action_links)): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
    </section>
    <?php if (!empty($page['sidebar_second'])): ?>
      <aside class="col-sm-3" role="complementary">
        <?php print render($page['sidebar_second']); ?>
      </aside><!-- #sidebar-second -->
    <?php endif; ?>
  </div>
</div>
<footer id="footer">
  <div class="container">
    <div class="row">
      <div class="col-md-9">
        <?php print render($page['footer']); ?>
      </div><!-- .col-md-9 -->
      <div class="col-md-3">
        <?php print render($page['footer_right']); ?>
      </div><!-- .col-md-3 -->
    </div><!-- .row -->
  </div><!-- .container -->
</footer><!-- #footer -->
